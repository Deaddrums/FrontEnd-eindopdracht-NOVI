import './NavBar.css'
import logoMain from '../../images/Broodschaap logo.jpg'


function NavBar() {


    return <>

        <div className="nav-outerwrapper">
            <div className="nav-innerwrapper">
                <img src={logoMain} alt="main logo broodschaap"/>
<h1> De Broodschaap app</h1>
            </div>
        </div>

    </>

}

export default NavBar