import './HistoryPage.css'
import {
    getShoppingListHistory,
    deleteShoppingListFromHistory
} from "../../Helpers/ShoppingListGenerator/ShoppingListStorage.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {useContext} from "react";
import OpenShoppingListCard from "../../Components/OpenShoppingListCard/OpenShoppingListCard.jsx";


function HistoryPage() {

    const {user} = useContext(AuthContext)
    const shoppingLists = getShoppingListHistory(user)


    function deleteList(
        ListId
    ) {
        deleteShoppingListFromHistory(
            ListId,
            user,
        )
        window.location.reload()
    }

    return <>
        <div
            className="hpOuterWrapper"
        >

            <h1
                className="hpTitle"
            >Mijn boodschappenlijstjes</h1>

            <div
                className="hpInnerWrapper"
            >

                <OpenShoppingListCard
                    shoppingLists={shoppingLists}
                    deleteList={deleteList}
                />

            </div>

        </div>

    </>


}

export default HistoryPage
