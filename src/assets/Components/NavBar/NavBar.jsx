import './NavBar.css'
import logoMain from '../../images/Broodschaap logo.jpg'


function NavBar() {


    return <>

        <div className="navOuterWrapper">


            <div className="navInnerWrapper">
                <img src={logoMain} alt="main logo broodschaap"/>
                <p><em>Bééééééééééééééhoorlijk makkelijk!</em></p>
                <ul className="navListItems">
                    <li><strong>Home</strong></li>
                    <li><strong>About</strong></li>
                    <li><strong>Allergie / dieet info</strong></li>
                </ul>
            </div>
        </div>

    </>

}

export default NavBar