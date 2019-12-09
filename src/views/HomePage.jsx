import React from 'react';
import '../assets/styles/home-page.scss'
import OpeningMenu from "../components/OpeningMenu.jsx";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Description from "../components/Description.jsx";
import Countdown from "../components/Countdown.jsx";
import Speakers from "../components/Speakers.jsx";
import TEDxDescription from "../components/TEDxDescription.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
    return (
        <>
            <OpeningMenu/>
            <div className="mainWhole">
                <Navbar/>
                <Header/>
                <StickyNavbar/>
                <Description/>
                <Countdown/>
                <Speakers/>
                <TEDxDescription/>
                <Team/>
                <Footer/>
            </div>
        </>

    )
}

export default HomePage;
