function getShoppingListStorageKey(user) {
    if (user) {
        return `shoppingLists_${user.id}`;
    }

    return "shoppingLists_guest";
}

export function saveShoppingListToHistory(shoppingList, user = null) {
    const storageKey = getShoppingListStorageKey(user);

    const existingHistory =
        JSON.parse(localStorage.getItem(storageKey)) || [];

    const updatedHistory = [
        shoppingList,
        ...existingHistory,
    ];

    localStorage.setItem(
        storageKey,
        JSON.stringify(updatedHistory)
    );

    return updatedHistory;
}

export function getShoppingListHistory(user = null) {
    const storageKey = getShoppingListStorageKey(user);

    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

export function deleteShoppingListFromHistory(listId, user = null) {
    const storageKey = getShoppingListStorageKey(user);

    const existingHistory =
        JSON.parse(localStorage.getItem(storageKey)) || [];

    const updatedHistory = existingHistory.filter((list) => {
        return list.id !== listId;
    });

    localStorage.setItem(
        storageKey,
        JSON.stringify(updatedHistory)
    );

    return updatedHistory;
}