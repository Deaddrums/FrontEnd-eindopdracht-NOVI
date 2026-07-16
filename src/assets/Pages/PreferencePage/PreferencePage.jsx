import './PreferencePage.css'
import data2 from '../../Data/AllergyData.json'
import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import image from "./../../images/Broodschaap in de keuken.png"
import {AuthContext} from "../../Context/AuthContext.jsx";
import PopUpMessage from "../../Components/PopUpMessage/PopUpMessage.jsx";
import { getFeedbackMessage } from "../../Helpers/GetFeedbackMessage/GetFeedbackMessage.jsx";

function PreferencePage() {
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


    const [ppAmountFamily, setPpAmountFamily] = useState('')
    const [ppBudgetAmount, setPpBudgetAmount] = useState('')
    const [ppBudgetPeriod, setPpBudgetPeriod] = useState('')
    const [ppSelectedAllergies, setPpSelectedAllergies] = useState([])


    useEffect(() => {

        if (!user) return;

        const savedPreferences =
            localStorage.getItem(
                `preferences_${user.id}`
            );

        if (!savedPreferences) return;

        const parsedPreferences =
            JSON.parse(savedPreferences);

        setPpAmountFamily(
            parsedPreferences.familyAmount
        );

        setPpBudgetAmount(
            parsedPreferences.budgetAmount
        );

        setPpBudgetPeriod(
            parsedPreferences.budgetPeriod
        );

        setPpSelectedAllergies(
            parsedPreferences.allergies
        );

    }, [user]);


    function handleAllergyChange(allergyName) {
        setPpSelectedAllergies((previousAllergies) => {
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
            familyAmount: ppAmountFamily,
            budgetAmount: ppBudgetAmount,
            budgetPeriod: ppBudgetPeriod,
            allergies: ppSelectedAllergies
        };

        localStorage.setItem(
            `preferences_${user.id}`,
            JSON.stringify(preferenceData)
        );

        showPopup(
            getFeedbackMessage("PREFERENCES_SAVE_SUCCESS")
        );
    }




    return <>

        <div
            className="ppOuterWrapper"
        >

            <h1
                className="ppTitle"
            > Wat zijn jouw voorkeuren? </h1>

            <div
                className="ppInnerWrapper"
            >

                <div
                    className="ppItemContainer"
                >

                    {popup.show && (
                        <PopUpMessage
                            message={popup.message}
                            type={popup.type}
                        />
                    )}



                    <form
                        id="ppPreferencesForm"
                        className="ppPreferenceForm"
                        onSubmit={handleSubmit}
                    >
                        <fieldset
                            className="ppAllergyList"
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
                                           checked={ppSelectedAllergies.includes(allergy.name)}
                                           onChange={() => handleAllergyChange(allergy.name)}
                                    />
                                    {" " + allergy.name}
                                </label>
                            ))}

                        </fieldset>

                        <fieldset
                            className="ppFamilyList"
                        >
                            <legend>
                                Familie opstelling
                            </legend>

                            <p>
                                Gezin grootte:
                            </p>

                            <input
                                type="number"
                                id="ppAmountFamily"
                                placeholder="Hoe groot is jouw familie?"
                                value={ppAmountFamily}
                                onChange={(e) => setPpAmountFamily(e.target.value)}
                            />

                            <p>
                                Budget:
                            </p>

                            <input
                                type="number"
                                id="ppBudgetAmount"
                                placeholder="Wat is je budget?"
                                value={ppBudgetAmount}
                                onChange={(e) => setPpBudgetAmount(e.target.value)}
                            />

                            <p>
                                Budget per:
                            </p>

                            <div
                                className="ppBudgetCheckbox"
                            >
                                <input
                                    type="radio"
                                    id="ppCheckboxBudget1"
                                    name="budgetPeriod"
                                    value="Week"
                                    checked={ppBudgetPeriod === "Week"}
                                    onChange={(e) => setPpBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppCheckboxBudget1"> Week</label>
                            </div>

                            <div
                                className="ppBudgetCheckbox"
                            >
                                <input
                                    type="radio"
                                    id="ppCheckboxBudget2"
                                    name="budgetPeriod"
                                    value="Maand"
                                    checked={ppBudgetPeriod === "Maand"}
                                    onChange={(e) => setPpBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppCheckboxBudget2"> Maand</label>
                            </div>

                            <div
                                className="ppBudgetCheckbox"
                            >

                                <input
                                    type="radio"
                                    id="ppCheckboxBudget3"
                                    name="budgetPeriod"
                                    value="Kwartaal"
                                    checked={ppBudgetPeriod === "Kwartaal"}
                                    onChange={(e) => setPpBudgetPeriod(e.target.value)}
                                />
                                <label htmlFor="ppCheckboxBudget3"> Kwartaal</label>
                            </div>

                        </fieldset>

                        <img src={image} alt="Broodschaap in de keuken"/>

                    </form>
                    <button
                        id="ppSavePreferences"
                        name="ppSavePreferences"
                        type="submit"
                        onClick={handleSubmit}
                    >Sla voorkeuren op
                    </button>
                </div>

            </div>

        </div>

    </>

}

export default PreferencePage