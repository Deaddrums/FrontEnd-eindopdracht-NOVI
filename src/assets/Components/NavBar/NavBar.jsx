import './NavBar.css'
import logoMain from '../../images/Broodschaap logo.jpg'
import {NavLink} from "react-router-dom";
import {useState, useContext} from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

function NavBar() {
    const { isAuth } = useContext(AuthContext)

    return <nav>

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

                    {isAuth ?
                        <li>
                            <NavLink to="/Dashboard"><strong>Dashboard</strong></NavLink>
                        </li>
                        :
                        <>
                        <li>
                            <NavLink to="/Login"><strong>Login</strong></NavLink>
                        </li>
                        <li>
                        <NavLink to="/Register"><strong>Register</strong></NavLink>
                        </li>
                        </>

                    }
                </ul>

            </div>
        </div>

    </nav>

}

export default NavBar