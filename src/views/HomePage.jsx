import React from 'react';
import '../assets/styles/home-page.scss'
import OpeningMenu from "../components/OpeningMenu";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Description from "../components/Description";

function HomePage() {
    return (
        <>
            <OpeningMenu/>
            <div className="mainWhole">
                <Navbar/>
                <Header/>
                <StickyNavbar/>
                <Description/>
            </div>
        </>

    )
}

export default HomePage;
