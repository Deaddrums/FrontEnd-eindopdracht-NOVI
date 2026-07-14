import './HomePage.css'
import MainPageContainer from "../../Components/MainPageContainer/MainPageContainer.jsx";
import {SmallMainPageContainer} from "../../Components/MainPageContainer/MainPageContainer.jsx";
import {Link} from "react-router-dom";


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

                    <Link to="/Login">
                        <button
                            id="Login Button"
                            type="button"
                        >LOGIN
                        </button>
                    </Link>

                    <Link to="/Register">
                        <button
                            id="Register Button"
                            type="button"
                        >REGISTREER
                        </button>
                    </Link>

                </MainPageContainer>
                <div className="smallMpcContainerWrapper">
                    <SmallMainPageContainer
                        id="MainPageContainer-QUICKLIST"
                        title="Liever meteen een lijstje?"
                        text="Geen account, geen voorkeuren — gewoon klikken en grazen maar 🐑"
                    >
                        <button
                            id="QUICKLIST Button"
                            type="button"
                        ><strong>Direct lijstje maken</strong>
                        </button>

                    </SmallMainPageContainer>

                    <SmallMainPageContainer
                        id="MainPageContainer-QUICKLIST"
                        title="Persoonlijker lijstje in 10 sec?"
                        text="Vertel even wat je wil — wij doen de rest. Geen account, geen geblaat, gewoon resultaat."
                    >
                        <button
                            id="QUICKCUSTOMLIST Button"
                            type="button"
                        ><strong>Snel persoonlijk lijstje</strong>
                        </button>

                    </SmallMainPageContainer>

                </div>
            </div>

        </div>
    </>


}

export default HomePage