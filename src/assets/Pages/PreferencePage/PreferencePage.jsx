import './PreferencePage.css'
import data2 from '../../Data/AllergyData.json'
import {useState} from "react";
import {Link} from "react-router-dom";
import image from "./../../images/Broodschaap in de keuken.png"

function PreferencePage() {

    const [ppAmountFamily, setPpAmountFamily] = useState('')
    const [ppBudgetAmount, setPpBudgetAmount] = useState('')
    const [ppBudgetPeriod, setPpBudgetPeriod] = useState('')
    const [ppSelectedAllergies, setPpSelectedAllergies] = useState([])


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

        const preferenceData = {
            familyAmount: ppFamilyamount,
            budgetAmount: ppBudgetAmount,
            budgetPeriod: ppBudgetPeriod,
            allergies: ppSelectedAllergies
        };

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
                    <form
                        id="ppPreferencesForm"
                        className="ppPreferenceForm"
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
                                <label key={allergy}>
                                    <input type="checkbox"/>
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
                        // onClick={handleSubmit}
                    >Sla voorkeuren op
                    </button>
                </div>

            </div>

        </div>

    </>

}

export default PreferencePage