
import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { ENDPOINTS } from "../Api/endpoints.js";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState("loading");

    async function fetchUserData(token) {

        try {

            const decoded = jwtDecode(token);
            const userId = decoded.userId;

            const result = await axios.get(
                ENDPOINTS.users.byId(userId),
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(result);

            setUser({
                email: result.data.email,
                id: result.data.id,
            });

            setIsAuth(true);
            setStatus("done");

        } catch (e) {

            localStorage.removeItem("token");

            console.error(e);

            setUser(null);
            setIsAuth(false);
            setStatus("done");
        }
    }

    function login(token) {

        localStorage.setItem("token", token);

        fetchUserData(token);
    }

    function logout() {

        localStorage.removeItem("token");

        setUser(null);
        setIsAuth(false);
        setStatus("done");
    }

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            fetchUserData(token);
        } else {
            setStatus("done");
        }

    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                user,
                status,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
