import './AccountDashboardPage.css'
import {Link} from "react-router-dom";

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
                className="adpInnerwrapper">

<div
className="adpButtonWrapper"
>

    <button>Historie</button>
    <button>Voorkeuren</button>
    <button>Nog iets</button>

</div>

            </div>
        </div>
    </>

}

export default AccountDashboardPage