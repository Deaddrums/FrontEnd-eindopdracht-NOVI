import './PreferencePageNoLogin.css'
import data2 from '../../Data/AllergyData.json'
import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import image from "./../../images/Broodschaap in de keuken.png"
import {AuthContext} from "../../Context/AuthContext.jsx";
import PopUpMessage from "../../Components/PopUpMessage/PopUpMessage.jsx";
import { getFeedbackMessage } from "../../Helpers/GetFeedbackMessage/GetFeedbackMessage.jsx";
import productsData from "../../Data/UserIdData.json"
import { generateShoppingList } from "../../Helpers/ShoppingListGenerator/ShoppingListGenerator.jsx";
import { saveShoppingListToHistory } from "../../Helpers/ShoppingListGenerator/ShoppingListStorage.jsx";
import { generateShoppingListPDF } from "../../Helpers/PDFGenerator/PDFGenerator.jsx";


function PreferencePageNoLogin() {
    const {user} = useContext(AuthContext)
    const [popup, setPopup] = useState({
        show: false,
        message: "",
        type: "success",
    });

    function showPopup(feedback) {
        setPopup({
            show: true,
            message: feedback.message,
            type: feedback.type,
        });

        setTimeout(() => {
            setPopup({
                show: false,
                message: "",
                type: "success",
            });
        }, 3000);
    }


    const [ppnlAmountFamily, setPpnlAmountFamily] = useState('')
    const [ppnlBudgetAmount, setPpnlBudgetAmount] = useState('')
    const [ppnlBudgetPeriod, setPpnlBudgetPeriod] = useState('')
    const [ppnlSelectedAllergies, setPpnlSelectedAllergies] = useState([])


    useEffect(() => {

        if (!user) return;

        const savedPreferences =
            localStorage.getItem(
                `preferences_${user.id}`
            );

        if (!savedPreferences) return;

        const parsedPreferences =
            JSON.parse(savedPreferences);

        setPpnlAmountFamily(
            parsedPreferences.familyAmount
        );

        setPpnlBudgetAmount(
            parsedPreferences.budgetAmount
        );

        setPpnlBudgetPeriod(
            parsedPreferences.budgetPeriod
        );

        setPpnlSelectedAllergies(
            parsedPreferences.allergies
        );

    }, [user]);


    function handleAllergyChange(allergyName) {
        setPpnlSelectedAllergies((previousAllergies) => {
            if (previousAllergies.includes(allergyName)) {
                return previousAllergies.filter((allergy) => allergy !== allergyName);
            }

            return [...previousAllergies, allergyName];
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!user) {
            showPopup(
                getFeedbackMessage("USER_NOT_LOGGED_IN")
            );
            return;
        }

        const preferenceData = {
            familyAmount: ppnlAmountFamily,
            budgetAmount: ppnlBudgetAmount,
            budgetPeriod: ppnlBudgetPeriod,
            allergies: ppnlSelectedAllergies
        };

        localStorage.setItem(
            `preferences_${user.id}`,
            JSON.stringify(preferenceData)
        );

        showPopup(
            getFeedbackMessage("PREFERENCES_SAVE_SUCCESS")
        );
    }


    function handleGenerateList() {

        const temporaryPreferences = {
            familyAmount: ppnlAmountFamily,
            budgetAmount: ppnlBudgetAmount,
            budgetPeriod: ppnlBudgetPeriod,
            allergies: ppnlSelectedAllergies,
        };

        try {

            const shoppingList =
                generateShoppingList(
                    productsData.data.products,
                    temporaryPreferences,
                    null
                );

            saveShoppingListToHistory(
                shoppingList,
                null
            );

            generateShoppingListPDF(
                shoppingList
            );

            showPopup(
                getFeedbackMessage(
                    "SHOPPINGLIST_SUCCESS"
                )
            );

        } catch (error) {

            console.error(error);

            showPopup(
                getFeedbackMessage(
                    "SHOPPINGLIST_FAILED"
                )
            );
        }
    }
    ``


    return <>

        <div
            className="ppnlOuterWrapper"
        >

            <h1
                className="ppnlTitle"
            > Wat zijn jouw voorkeuren? </h1>

            <div
                className="ppnlInnerWrapper"
            >

                <div
                    className="ppnlItemContainer"
                >

                    {popup.show && (
                        <PopUpMessage
                            message={popup.message}
                            type={popup.type}
                        />
                    )}



                    <form
                        id="ppnlPreferencesForm"
                        className="ppnlPreferenceForm"
                        onSubmit={handleSubmit}
                    >
                        <fieldset
                            className="ppnlAllergyList"
                        >
                            <legend>
                                Allergieën
                            </legend>
                            <p>
                                <em>
                                    Informatie over allergieën,
                                    <Link to="/Allergy">
                                        vind je hier
                                    </Link>
                                </em>
                            </p>

                            {data2.map((allergy) => (
                                <label key={allergy.id}>
                                    <input type="checkbox"
                                           checked={ppnlSelectedAllergies.includes(allergy.name)}
                                           onChange={() => handleAllergyChange(allergy.name)}
                                    />
                                    {" " + allergy.name}
                                </label>
                            ))}

                        </fieldset>

                        <fieldset
                            className="ppnlFamilyList"
                        >
                            <legend>
                                Familie opstelling
                            </legend>

                            <p>
                                Gezin grootte:
                            </p>

                            <input
                                type="number"
                                id="ppnlAmountFamily"
                                placeholder="Hoe groot is jouw familie?"
                                value={ppnlAmountFamily}
                                onChange={(e) => setPpnlAmountFamily(e.target.value)}
                            />

                            <p>
                                Budget:
                            </p>

                            <input
                                type="number"
                                id="ppnlBudgetAmount"
                                placeholder="Wat is je budget?"
                                value={ppnlBudgetAmount}
                                onChange={(e) => setPpnlBudgetAmount(e.target.value)}
                            />

                            <p>
                                Budget per:
                            </p>

                            <div
                                className="ppnlBudgetCheckbox"
                            >
                                <input
                                    type="radio"
                                    id="ppnlCheckboxBudget1"
                                    name="budgetPeriod"
                                    value="Week"
                                    checked={ppnlBudgetPeriod === "Week"}
                                    onChange={(e) => setPpnlBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppnlCheckboxBudget1"> Week</label>
                            </div>

                            <div
                                className="ppnlBudgetCheckbox"
                            >
                                <input
                                    type="radio"
                                    id="ppnlCheckboxBudget2"
                                    name="budgetPeriod"
                                    value="Maand"
                                    checked={ppnlBudgetPeriod === "Maand"}
                                    onChange={(e) => setPpnlBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppnlCheckboxBudget2"> Maand</label>
                            </div>

                            <div
                                className="ppnlBudgetCheckbox"
                            >

                                <input
                                    type="radio"
                                    id="ppnlCheckboxBudget3"
                                    name="budgetPeriod"
                                    value="Kwartaal"
                                    checked={ppnlBudgetPeriod === "Kwartaal"}
                                    onChange={(e) => setPpnlBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppnlCheckboxBudget3"> Kwartaal</label>
                            </div>

                        </fieldset>

                        <img src={image} alt="Broodschaap in de keuken"/>

                    </form>
                    <button
                        id="ppnlSavePreferences"
                        name="ppnlSavePreferences"
                        type="submit"
                        onClick={handleGenerateList}
                    >Genereer boodschappenlijst
                    </button>
                </div>

            </div>

        </div>

    </>

}

export default PreferencePageNoLogin