import './NavBar.css'
import logoMain from '../../images/Broodschaap logo.jpg'


function NavBar() {


    return <>

        <div className="nav-outerwrapper">
            <div className="nav-innerwrapper">
                <img src={logoMain} alt="main logo broodschaap"/>
<h1> De Broodschaap app</h1>
                <ul className="navListItems">
                    <li>Home</li>
                    <li>About</li>
                    <li>Allergie / dieet info</li>
                </ul>
            </div>
        </div>

    </>

}

export default NavBar