// import { useState } from 'react'
import './App.css'
import NavBar from "./assets/Components/NavBar/NavBar.jsx";
import HomePage from "./assets/Pages/HomePage/HomePage.jsx";
import FooterBar from "./assets/Components/FooterBar/FooterBar.jsx";
import AboutPage from "./assets/Pages/AboutPage/AboutPage.jsx";
import AllergyPage from "./assets/Pages/AllergyPage/AllergyPage.jsx";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./assets/Pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./assets/Pages/RegisterPage/RegisterPage.jsx";
import AccountDashboardPage from "./assets/Pages/AccountDashboardPage/AccountDashboardPage.jsx";
import HistoryPage from "./assets/Pages/HistoryPage/HistoryPage.jsx";
import PreferencePage from "./assets/Pages/PreferencePage/PreferencePage.jsx";
import boodschappenImage from './assets/images/Broodschaap doet boodschappen.png'
import keukenImage from './assets/images/Broodschaap in de keuken.png'
import bankImage from './assets/images/Broodschaap op bank 2.png'
import registerImage from './assets/images/Broodschaap Register.png'
import PrivateRoute from './assets/Components/PrivateRoute/PrivateRoute.jsx'

export const preLoadImages = () => {
    [
        boodschappenImage,
        keukenImage,
        bankImage,
        registerImage,
    ].forEach(src => {
        const img = new Image();
        img.src = src;
    });

};

function App() {


    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/About" element={<AboutPage/>}/>
                <Route path="/Allergy" element={<AllergyPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Register" element={<RegisterPage/>}/>
                <Route path="/Dashboard" element={
                    <PrivateRoute>
                    <AccountDashboardPage/>
                    </PrivateRoute>
                }/>
                <Route path="/History" element={<HistoryPage/>}/>
                <Route path="/Preference" element={<PreferencePage/>}/>
            </Routes>

            <FooterBar/>
        </>
    )
}

export default App
