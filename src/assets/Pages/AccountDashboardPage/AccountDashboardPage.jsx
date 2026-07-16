import './AccountDashboardPage.css'
import { Link, useNavigate } from "react-router-dom";
import image from './../../images/Broodschaap doet boodschappen.png'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { getPreferencesForGenerator,generateShoppingList } from "../../Helpers/ShoppingListGenerator/ShoppingListGenerator.jsx";
import {saveShoppingListToHistory} from "../../Helpers/ShoppingListGenerator/ShoppingListStorage.jsx";
import {generateShoppingListPDF} from "../../Helpers/PDFGenerator/PDFGenerator.jsx";
import productsData from "../../Data/UserIdData.json"

function AccountDashboardPage() {
    const {logout} = useContext(AuthContext)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
        console.log("Je bent succesvol uitgelogd")
    }

    function handleGenerateShoppingList() {

        try {
            const products = productsData.data.products

            const preferences = getPreferencesForGenerator(user)

            const shoppingList = generateShoppingList(
                products,
                preferences,
                user
            );

            saveShoppingListToHistory(
                shoppingList,
                user
            );

            generateShoppingListPDF(shoppingList)

            console.log("Boodschappenlijst gegenereerd:", shoppingList);

        } catch (error) {
            console.error(error)

            console.log("Er ging iets mis met het genereren van de boodschappenlijst")
        }

    }

    return <>

        <div
            className="adpOuterWrapper"
        >
            <h1
                className="adpTitle">
                Welkom {user.email}
            </h1>

            <h2>
                <em>Bekijk hier je boodschappenlijstje historie en je voorkeuren</em>
            </h2>
            <div
                className="adpInnerWrapper">

                <div
                    className="adpButtonWrapper"
                >
                    <Link to="/History">
                        <button
                            id="adpHistory"
                            type="button"
                        >Historie
                        </button>
                    </Link>

                    <Link to="/Preference">
                        <button
                            id="adpPreference"
                            type="button"
                        >Voorkeuren
                        </button>
                    </Link>

                    <button
                        id="adpGenerateList"
                        type="button"
                        onClick={handleGenerateShoppingList}
                    >Genereer
                    </button>

                </div>

                <img src={image} alt="Broodschaap doet boodschappen"/>

                <button
                    id="adpLogOut"
                    type="button"
                    onClick={handleLogout}
                >Uitloggen
                </button>

            </div>
        </div>
    </>

}

export default AccountDashboardPage