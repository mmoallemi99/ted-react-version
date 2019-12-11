import React from 'react'
import '../assets/styles/home-page.scss'
import logo from '../assets/images/Logo.png'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <img className="header__logo"/>
                    <div className="header__details">
                        <p className="header__slogan">Stage Is Ready</p>
                        <p className="header__date">December 27th</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
