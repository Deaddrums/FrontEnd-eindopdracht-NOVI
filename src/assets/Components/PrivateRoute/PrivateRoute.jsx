import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {Navigate, useNavigate} from "react-router-dom";

function PrivateRoute ({children}) {
    const { isAuth } = useContext(AuthContext)

    if (!isAuth) {
        return  <Navigate to={"/"}/>
    }
    return children;
}

export default PrivateRoute