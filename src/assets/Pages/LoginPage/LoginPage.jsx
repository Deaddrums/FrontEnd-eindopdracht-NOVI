import './LoginPage.css'
import { Link, useNavigate } from "react-router-dom";
import image from '../../images/Broodschaap op bank 2.png'
import { useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../../Api/endpoints.js";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import PopupMessage from "../../Components/PopupMessage/PopupMessage";
import { getFeedbackMessage } from "../../Helpers/GetFeedbackMessage/GetFeedbackMessage.jsx";

function LoginPage() {
   const { login } = useContext(AuthContext);
   const navigate = useNavigate();

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

    const [lpEmail, setLpEmail] = useState('')
    const [lpPassword, setLpPassword] = useState('')

    const PROJECT_ID = import.meta.env.VITE_PROJECT_ID

    async function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            email: lpEmail,
            password: lpPassword,
        };

        console.log(payload);

        try {
            const response = await axios.post(
                ENDPOINTS.auth.login,
                payload,
                {
                    headers: {
                        'novi-education-project-id': PROJECT_ID
                    }
                }
            );

            console.log("Je bent succesvol ingelogd" , response.data);

            login(response.data.token);

            showPopup(
                getFeedbackMessage("LOGIN_SUCCESS")
            );


            setTimeout(() => {
                navigate('/Dashboard');
            }, 1500);

        } catch (error) {

            showPopup(
                getFeedbackMessage("LOGIN_FAILED")
            );

            console.error(error)
            console.log('Er ging iets mis bij het inloggen van jouw account')

            console.log('STATUS');
            console.log(error.response.status);

            console.log('DATA');
            console.log(error.response.data);
        }
    }
        const LoginData =
            lpEmail &&
            lpPassword

        return <>

            <div className="lpOuterWrapper">
                <h1>Welkom terug</h1>

                {popup.show && (
                    <PopupMessage
                        message={popup.message}
                        type={popup.type}
                    />
                )}

                <div className="lpInnerWrapper">

                    <img src={image} alt="broodschaap op bank"/>

                    <form className="lpLoginForm"
                        onSubmit={handleSubmit}
                    >

                        <div className="lpInputContainer">

                            <fieldset className="lpFieldset">
                                <legend>Email</legend>
                                <input type="email"
                                       id="lpEmailId"
                                       name="lpEmail"
                                       placeholder="Schrijf hier je email"
                                       value={lpEmail}
                                       onChange={(e) => setLpEmail(e.target.value)}
                                />
                            </fieldset>

                            <fieldset className="lpFieldset">
                                <legend>Wachtwoord</legend>
                                <input type="password"
                                       id="lpPasswordId"
                                       name="lpPassword"
                                       placeholder="Schrijf hier je wachtwoord"
                                       value={lpPassword}
                                       onChange={(e) => setLpPassword(e.target.value)}
                                />
                            </fieldset>

                        </div>
                        <Link to="/Register"
                        >Heb je nog geen account?
                        </Link>

                        <button
                            id="lpLoginButton"
                            type="submit"
                            disabled={!LoginData}

                        >Inloggen
                        </button>


                    </form>
                </div>
            </div>
        </>

    }

    export default LoginPage