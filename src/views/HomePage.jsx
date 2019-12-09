import React from 'react';
import '../assets/styles/home-page.scss'
import OpeningMenu from "../components/OpeningMenu";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Description from "../components/Description";
import Countdown from "../components/Countdown";
import Speakers from "../components/Speakers";

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
            </div>
        </>

    )
}

export default HomePage;
