function getDefaultPreferences() {
    return {
        familyAmount: 1,
        budgetAmount: 100,
        budgetPeriod: "Week",
        allergies: [],
    };
}

function normalizePreferences(preferences) {
    const defaultPreferences = getDefaultPreferences();

    if (!preferences) {
        return defaultPreferences;
    }

    return {
        familyAmount: Number(preferences.familyAmount) || defaultPreferences.familyAmount,
        budgetAmount: Number(preferences.budgetAmount) || defaultPreferences.budgetAmount,
        budgetPeriod: preferences.budgetPeriod || defaultPreferences.budgetPeriod,
        allergies: Array.isArray(preferences.allergies)
            ? preferences.allergies
            : [],
    };
}

export function getPreferencesForGenerator(user, temporaryPreferences = null) {
    if (user) {
        const savedPreferences = localStorage.getItem(`preferences_${user.id}`);

        if (savedPreferences) {
            return normalizePreferences(JSON.parse(savedPreferences));
        }
    }

    if (temporaryPreferences) {
        return normalizePreferences(temporaryPreferences);
    }

    return getDefaultPreferences();
}

function calculateWeeklyBudget(preferences) {
    const budgetAmount = Number(preferences.budgetAmount) || 100;

    if (preferences.budgetPeriod === "Maand") {
        return budgetAmount / 4;
    }

    if (preferences.budgetPeriod === "Kwartaal") {
        return budgetAmount / 13;
    }

    return budgetAmount;
}

function productHasBlockedAllergy(product, blockedAllergies) {
    if (!product.allergies) {
        return false;
    }

    const productAllergies = product.allergies
        .split(",")
        .map((allergy) => allergy.trim())
        .filter(Boolean);

    return productAllergies.some((allergy) =>
        blockedAllergies.includes(allergy)
    );
}

function getRandomProduct(products) {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

function addProductToBasket(basket, product) {
    const existingProduct = basket.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.lineTotal = Number(
            (existingProduct.quantity * existingProduct.price).toFixed(2)
        );

        return basket;
    }

    basket.push({
        id: product.id,
        name: product.name,
        price: product.price,
        allergies: product.allergies,
        quantity: 1,
        lineTotal: product.price,
    });

    return basket;
}

export function generateShoppingList(products, preferences, user = null) {
    const normalizedPreferences = normalizePreferences(preferences);

    const weeklyBudget = calculateWeeklyBudget(normalizedPreferences);

    const blockedAllergies = normalizedPreferences.allergies;

    const allowedProducts = products.filter((product) => {
        return !productHasBlockedAllergy(product, blockedAllergies);
    });

    if (allowedProducts.length === 0) {
        throw new Error("NO_PRODUCTS_AVAILABLE");
    }

    let basket = [];
    let totalPrice = 0;
    let attempts = 0;

    const maxAttempts = 2000;

    while (totalPrice < weeklyBudget && attempts < maxAttempts) {
        attempts++;

        const remainingBudget = weeklyBudget - totalPrice;

        const affordableProducts = allowedProducts.filter((product) => {
            return product.price <= remainingBudget;
        });

        if (affordableProducts.length === 0) {
            break;
        }

        const randomProduct = getRandomProduct(affordableProducts);

        basket = addProductToBasket(basket, randomProduct);

        totalPrice = Number(
            basket
                .reduce((total, item) => total + item.lineTotal, 0)
                .toFixed(2)
        );
    }

    const shoppingList = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),

        userId: user ? user.id : null,
        userEmail: user ? user.email : null,

        preferences: normalizedPreferences,

        budget: {
            originalAmount: normalizedPreferences.budgetAmount,
            period: normalizedPreferences.budgetPeriod,
            weeklyBudget: Number(weeklyBudget.toFixed(2)),
        },

        totalPrice: Number(totalPrice.toFixed(2)),
        remainingBudget: Number((weeklyBudget - totalPrice).toFixed(2)),

        items: basket,
    };

    return shoppingList;
}