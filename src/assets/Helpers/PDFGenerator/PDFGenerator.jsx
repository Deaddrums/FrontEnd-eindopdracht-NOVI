import { jsPDF } from "jspdf";

function formatCurrency(value) {
    return `€${Number(value).toFixed(2)}`;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleString("nl-NL", {
        dateStyle: "short",
        timeStyle: "short",
    });
}

export function generateShoppingListPDF(shoppingList) {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("Boodschappenlijst", 20, y);

    y += 12;

    doc.setFontSize(11);
    doc.text(`Aangemaakt op: ${formatDate(shoppingList.createdAt)}`, 20, y);

    y += 8;

    if (shoppingList.userEmail) {
        doc.text(`Gebruiker: ${shoppingList.userEmail}`, 20, y);
        y += 8;
    }

    doc.text(
        `Budget: ${formatCurrency(shoppingList.budget.weeklyBudget)} per week`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Totaal: ${formatCurrency(shoppingList.totalPrice)}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Over: ${formatCurrency(shoppingList.remainingBudget)}`,
        20,
        y
    );

    y += 12;

    doc.setFontSize(14);
    doc.text("Producten", 20, y);

    y += 10;

    doc.setFontSize(10);

    shoppingList.items.forEach((item) => {
        if (y > 280) {
            doc.addPage();
            y = 20;
        }

        const line = `${item.quantity}x ${item.name} - ${formatCurrency(item.lineTotal)}`;

        doc.text(line, 20, y);

        y += 7;
    });

    y += 8;

    if (y > 280) {
        doc.addPage();
        y = 20;
    }

    doc.setFontSize(11);
    doc.text(
        `Aantal verschillende producten: ${shoppingList.items.length}`,
        20,
        y
    );

    const fileName = `boodschappenlijst-${shoppingList.createdAt.slice(0, 10)}.pdf`;

    doc.save(fileName);
}