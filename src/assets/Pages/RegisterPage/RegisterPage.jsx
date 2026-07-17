import './RegisterPage.css'
import { useState } from "react";
import axios from "axios";
import image from '../../images/Broodschaap Register.png'
import { PasswordConfirmer } from "../../Helpers/PasswordConfirmer/PasswordConfirmer.jsx";
import { ENDPOINTS } from "../../Api/endpoints.js";
import popUpMessage from "../../Components/PopUpMessage/PopUpMessage.jsx";
import { getFeedbackMessage } from "../../Helpers/GetFeedbackMessage/GetFeedbackMessage.jsx";
import PopUpMessage from "../../Components/PopUpMessage/PopUpMessage.jsx";

function RegisterPage() {


    const [rpName, setRpName] = useState('')
    const [rpEmail, setRpEmail] = useState('')
    const [rpPassword, setRpPassword] = useState('')
    const [rpConfirmPassword, setRpConfirmPassword] = useState('')
    const PROJECT_ID = import.meta.env.VITE_PROJECT_ID

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

    async function handleSubmit(e) {
        e.preventDefault();


        const payload = {
            email: rpEmail,
            password: rpPassword,
            roles: ["user"]
        };

        console.log(payload);


        try {
            const response = await axios.post(
                ENDPOINTS.auth.create,
                payload,
                {
                    headers: {
                        'novi-education-project-id': PROJECT_ID
                    }

                }
            );

            console.log(`Account succesvol aangemaakt! ${rpName}`)

            showPopup(
                getFeedbackMessage("REGISTER_SUCCESS")
            );

        } catch (error) {

            showPopup(
                getFeedbackMessage("REGISTER_FAILED")
            )

            console.error(error)
            console.log('Er ging iets mis met het aanmaken van jouw account')

            console.log('STATUS');
            console.log(error.response.status);

            console.log('DATA');
            console.log(error.response.data);
        }

    }

    const passwordsMatch =
        rpPassword &&
        rpConfirmPassword &&
        rpPassword === rpConfirmPassword

    return <>

        <div className="rpOuterWrapper">

            <h1 className="rpTitle"> ACCOUNT REGISTREREN </h1>

            {popup.show && (
                <PopUpMessage
                    message={popup.message}
                    type={popup.type}/>
            )}

            <div className="rpInnerWrapper">

                <img src={image} alt="Broodschaap Registreer"/>

                <form
                    className="rpForm"
                    onSubmit={handleSubmit}
                >

                    <fieldset className="rpFieldset">
                        <legend>Naam</legend>
                        <input type="textarea"
                               id="rpNameID"
                               name="rpName"
                               placeholder="Schrijf hier je naam"
                               value={rpName}
                               onChange={(e) => setRpName(e.target.value)}
                        />

                    </fieldset>

                    <fieldset className="rpFieldset">
                        <legend>Email</legend>
                        <input type="email"
                               id="rpEmailID"
                               name="rpEmail"
                               placeholder="Schrijf hier je e-mail"
                               value={rpEmail}
                               onChange={(e) => setRpEmail(e.target.value)}
                        />

                    </fieldset>

                    <fieldset
                        className={`rpFieldset ${PasswordConfirmer(rpPassword, rpConfirmPassword)}`}
                    >
                        <legend>Wachtwoord</legend>
                        <input type="password"
                               id="rpPasswordID"
                               name="rpPassword"
                               placeholder="Schrijf hier je wachtwoord"
                               value={rpPassword}
                               onChange={(e) => setRpPassword(e.target.value)}
                        />

                    </fieldset>

                    <fieldset
                        className={`rpFieldset ${PasswordConfirmer(rpPassword, rpConfirmPassword)}`}
                    >
                        <legend>Bevestig wachtwoord</legend>
                        <input type="password"
                               id="rpPasswordConfirmID"
                               name="rpPasswordConfirm"
                               value={rpConfirmPassword}
                               onChange={(e) => setRpConfirmPassword(e.target.value)}
                               placeholder="Herhaal hier je wachtwoord"
                        />

                    </fieldset>

                    <button className="rpFormButton"
                            type="submit"
                            disabled={!passwordsMatch}
                    >Registreer
                    </button>

                </form>

            </div>


        </div>

    </>

}

export default RegisterPage