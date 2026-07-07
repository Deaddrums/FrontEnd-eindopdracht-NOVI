import './PreferencePage.css'
import data2 from '../../Data/AllergyData.json'
import {useState} from "react";
import {Link} from "react-router-dom";

function PreferencePage() {

    const [ppFamilyAmount, setPpFamilyAmount] = useState(0)

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
                                {allergy.name}
                            </label>
                        ))}

                    </fieldset>

                    <fieldset
                        className="ppFamilyList"
                    >
                        <legend>
                            Familie opstelling
                        </legend>

                        <input
                            type="textarea"
                            id="ppFamilyAmount"
                            placeholder="Hoe groot is jouw familie?"
                            value={ppFamilyAmount}
                            onChange={(e) => setPpFamilyAmount(e.target.value)}
                        />

                    </fieldset>

                </form>

            </div>

        </div>

    </>

}

export default PreferencePage