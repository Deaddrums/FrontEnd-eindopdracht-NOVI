import './LoginButtons.css'

function LoginButtons () {

const isAuth = False

    return<>

        {isAuth ?

            <button
                type="button"
            >
                LOG OUT
            </button>

            :
            <div>
            <button
            type="button"
            >
                LOGIN
            </button>

            <button
            type="button"
            >
            REGISTREER
            </button>
            </div>
        }
    </>

}

export default LoginButtons
