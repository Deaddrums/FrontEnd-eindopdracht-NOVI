import './HistoryPage.css'
import {
    getShoppingListHistory,
    deleteShoppingListFromHistory
} from "../../Helpers/ShoppingListGenerator/ShoppingListStorage.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {useContext, useState, useEffect} from "react";
import OpenShoppingListCard from "../../Components/OpenShoppingListCard/OpenShoppingListCard.jsx";
import GetRandomJoke from "../../Helpers/GetRandomJoke/GetRandomJoke.jsx";

function HistoryPage() {

    const {user} = useContext(AuthContext)
    const shoppingLists = getShoppingListHistory(user)
    const [randomJoke, setRandomJoke] = useState("")


    useEffect(() => {

        async function loadJoke() {

            try {
                const jokeData =
                    await GetRandomJoke();
                console.log(jokeData);
                setRandomJoke(
                    `${jokeData.setup ?? ""}
                       ${jokeData.punchline ?? ""}`
                );

            } catch (error) {
                console.error(error);
                setRandomJoke(
                    "Broodschaap heeft gezocht, maar vond alleen wat wol."
                );
            }
        }

        if (shoppingLists.length === 0) {
            loadJoke();

        }
    }, [shoppingLists.length]);

    function deleteList(
        ListId
    ) {
        deleteShoppingListFromHistory(
            ListId,
            user,
        )
        window.location.reload()
    }


    if (
        shoppingLists.length === 0
    ) {

        return (

            <div className="hpOuterWrapper">

                <h1 className="hpTitle">

                    Mijn boodschappenlijstjes

                </h1>

                <div className="hpJokeContainer">

                    <h2>
                        Geen lijstjes gevonden, maar wel een slechte grap:
                    </h2>

                    <p>
                        {randomJoke ||
                            "Broodschaap zoekt een grap..."
                        }

                    </p>

                </div>

            </div>

        );
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