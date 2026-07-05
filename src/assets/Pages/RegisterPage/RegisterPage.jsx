import './RegisterPage.css'
import {useState} from "react";
import image from '../../images/Broodschaap Register.png'

function RegisterPage() {

    const [rpName, setRpName] = useState('')
    const [rpEmail, setRpEmail] = useState('')
    const [rpPassword, setRpPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted, ${rpName}, ${rpEmail}, ${rpPassword}`)
    }

    return <>

        <div className="rpOuterWrapper">

            <h1 className="rpTitle"> ACCOUNT REGISTREREN </h1>

            <div className="rpInnerWrapper">

                <img src={image} alt="Broodschaap Registreer"/>

                <form
                    className="rpForm"
                onSubmit={handleSubmit}
                >

                    <fieldset className="rpFieldset">
                        <legend>Name</legend>
                        <input type="textarea"
                               id="rpNameID"
                               name="rpName"
                               placeholder="Schrijf hier je naam"
                               value={rpName}
                               onChange={(e) => setRpName(e.target.value)}
                        />

                    </fieldset>

                    <fieldset className="rpFieldset">
                        <legend>Email</legend>
                        <input type="textarea"
                               id="rpEmailID"
                               name="rpEmail"
                               placeholder="Schrijf hier je Email"
                               value={rpEmail}
                               onChange={(e) => setRpEmail(e.target.value)}
                        />

                    </fieldset>

                    <fieldset className="rpFieldset">
                        <legend>Password</legend>
                        <input type="textarea"
                               id="rpPasswordID"
                               name="rpPassword"
                               placeholder="Schrijf hier je naam"
                               value={rpPassword}
                               onChange={(e) => setRpPassword(e.target.value)}
                        />

                    </fieldset>

                    <button className="rpFormButton"
                    type="submit"
                    onClick={handleSubmit}
                    >Registreer</button>

                </form>

            </div>


        </div>

    </>

}

export default RegisterPage