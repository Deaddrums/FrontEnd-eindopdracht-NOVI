import './AccountDashboardPage.css'
import {Link} from "react-router-dom";
import image from './../../images/Broodschaap doet boodschappen.png'

function AccountDashboardPage() {

    return <>

        <div
            className="adpOuterWrapper"
        >
            <h1
                className="adpTitle">
                Account dashboard
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
                    >Genereer
                    </button>

                </div>

                <img src={image} alt="Broodschaap doet boodschappen"/>

                <button
                    id="adpLogOut"
                    type="button"
                >Uitloggen
                </button>

            </div>
        </div>
    </>

}

export default AccountDashboardPage