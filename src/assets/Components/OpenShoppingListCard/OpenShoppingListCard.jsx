import { useState } from "react";
import ShoppingListCard from "../ShoppingListCard/ShoppingListCard.jsx";


function OpenShoppingListCard({
                                 shoppingLists,
                                 deleteList
                             }) {

    const [openListId,
        setOpenListId] =
        useState(null);

    function handleToggle(
        listId
    ) {

        if (
            openListId === listId
        ) {

            setOpenListId(
                null
            );

            return;
        }

        setOpenListId(
            listId
        );
    }

    return (

        <>
            {shoppingLists.map(
                (shoppingList) => (

                    <ShoppingListCard

                        key={
                            shoppingList.id
                        }

                        shoppingList={
                            shoppingList
                        }

                        isOpen={
                            openListId ===
                            shoppingList.id
                        }

                        onToggle={() =>
                            handleToggle(
                                shoppingList.id
                            )
                        }

                        onDelete={
                            deleteList
                        }

                    />

                ))}
        </>

    );
}

export default OpenShoppingListCard