import './HomePage.css'
import MainPageContainer from "../../Components/MainPageContainer/MainPageContainer.jsx";
import {SmallMainPageContainer} from "../../Components/MainPageContainer/MainPageContainer.jsx";

function HomePage() {


    return <>
        <div className="home-OuterWrapper">
            <div className="title-Wrapper">
                <h1>Welkom bij <span className="titleHome">DE BROODSCHAAP</span> app</h1>
                <p><span className="underlineHome">De app</span> om jouw booschappenlijstje snel in elkaar te zetten</p>

                <MainPageContainer
                    id="MainPageContainer-LOGIN"
                    title="Inloggen of registreren"
                    text="Heb je al een account? kom dan lekker inloggen.
                  Zo niet, schrik niet! Want je kan hier ook een account aanmaken"
                    >

                <button
                    id="Login Button"
                    type="button"
                >LOGIN
                </button>

                <button
                    id="Register Button"
                    type="button"
                >REGISTREER
                </button>

            </MainPageContainer>

                <SmallMainPageContainer
                    id="MainPageContainer-QUICKLIST"
                    title="Geen account maar toch een lijstje?"
                    text="Klik dan hier op deze button op snel een lijstje te maken, zonder voorkeuren ;)"
                    >
                    <button
                        id="QUICKLIST Button"
                        type="button"
                    >Snelle boodschappenlijst
                    </button>

                </SmallMainPageContainer>

            </div>

        </div>
    </>


}

export default HomePage