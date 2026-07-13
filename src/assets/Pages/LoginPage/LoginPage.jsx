import './LoginPage.css'
import {Link} from "react-router-dom";
import image from '../../images/Broodschaap op bank 2.png'

function LoginPage() {

    return <>

        <div className="loginOuterWrapper">
            <h1>Welkom terug</h1>

            <div className="loginInnerWrapper">

                <img src={image} alt="broodschaap op bank"/>

                <form className="loginForm">

                    <div className="inputContainer">
                        <input
                            id="loginEmail"
                            name="loginEmail"
                            type="email"
                            placeholder=" Type hier je email "
                            required
                        />

                        <label htmlFor="username">
                            Gebruikersnaam
                        </label>
                    </div>

                    <div className="inputContainer">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder=" Type hier je wachtwoord "
                            required
                        />

                        <label htmlFor="password">
                            Wachtwoord
                        </label>
                    </div>

                    <Link to="/Register"
                    >Heb je nog geen account?
                    </Link>

                    <button
                        id="loginButtonLoginPage"
                        type="button"
                        onClick="Submit"

                    >Inloggen
                    </button>


                </form>
            </div>
        </div>
    </>

}

export default LoginPage