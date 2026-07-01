// import { useState } from 'react'
import './App.css'
import NavBar from "./assets/Components/NavBar/NavBar.jsx";
import HomePage from "./assets/Pages/HomePage/HomePage.jsx";
import FooterBar from "./assets/Components/FooterBar/FooterBar.jsx";
import AboutPage from "./assets/Pages/AboutPage/AboutPage.jsx";
import AllergyPage from "./assets/Pages/AllergyPage/AllergyPage.jsx";
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <>
            <NavBar/>

            <Routes>
<Route path="/" element={ <HomePage/> } />
<Route path="/About" element={ <AboutPage/> } />
<Route path="/Allergy" element={ <AllergyPage/> } />
            </Routes>

            <FooterBar/>
        </>
    )
}

export default App
