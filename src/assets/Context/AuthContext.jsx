import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINTS} from "../Api/endpoints.js";
// import {useNavigate} from 'react-router-dom';
// import axios from "axios";
// import {jwtDecode} from "jwt-decode";
// import {ENDPOINTS} from "../api/endpoints";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false)

    function login(token) {
        localStorage.setItem("token", token);
        toggleIsAuth(true);
    }

    function logout() {
        localStorage.removeItem("token")
        toggleIsAuth(false)
    }



    return (
        <AuthContext.Provider value=
                                  {{
                                      isAuth,
                                      login,
                                      logout
                                  }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider