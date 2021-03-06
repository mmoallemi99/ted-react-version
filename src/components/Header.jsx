import React from 'react'
import '../assets/styles/home-page.scss'
import logo from '../assets/images/Logo.png'

function Header() {
    console.log("this website is React Version of TEDxUniverityOfIsfahan created by Reza Hasani| you can see my CV here: "+ 'https://www.linkedin.com/in/rezahasani78/');
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <img className="header__logo" src={logo}  alt="logo" />
                    <a className="registerBigButton" href="#registerPopUp">
                        Register now!
                    </a>
                </div>
                    <div className="header__details">
                        <p className="header__slogan">Stage Is Ready</p>
                        <p className="header__date">December 27th</p>
                    </div>
            </header>
        </>
    )
}

export default Header;
