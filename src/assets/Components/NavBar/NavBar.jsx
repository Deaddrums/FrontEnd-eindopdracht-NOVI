import './NavBar.css'
import logoMain from '../../images/Broodschaap logo.jpg'
import { NavLink } from "react-router-dom";

function NavBar() {


    return <>

        <div className="navOuterWrapper">


            <div className="navInnerWrapper">
                <img src={logoMain} alt="main logo broodschaap"/>
                <p><em>Bééééééééééééééhoorlijk makkelijk!</em></p>

                <ul className="navListItems">
                    <li>
                        <NavLink to="/"><strong>Home</strong></NavLink>
                    </li>
                    <li>
                        <NavLink to="/About"><strong>About</strong></NavLink>
                    </li>
                    <li>
                        <NavLink to="/Allergy"><strong>Allergie info</strong></NavLink>
                    </li>
                    <li>
                        <NavLink to="/Diet"><strong>dieet info</strong></NavLink>
                    </li>
                </ul>

            </div>
        </div>

    </>

}

export default NavBar