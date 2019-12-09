import React from 'react';
import '../assets/styles/home-page.scss'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__menuButton">
                    <div className="menuButtonIcon">
                        <span className="navbar__menuButton_icon-1"></span>
                        <span className="navbar__menuButton_icon-2"></span>
                        <span className="navbar__menuButton_icon-3"></span>
                    </div>
                </div>

                <div className="navbar__menu">
                    <ul className="navbar__menu_list">
                        <li className="navbar__menu_list_item"><a href="#"
                                                                  className="navbar__menu_list_item_link">Home</a></li>
                        <li className="navbar__menu_list_item"><a href="#" className="navbar__menu_list_item_link">The
                            Speakers</a>
                        </li>
                        <li className="navbar__menu_list_item"><a href="#" className="navbar__menu_list_item_link">Our
                            Team</a>
                        </li>
                        <li className="navbar__menu_list_item"><a href="#"
                                                                  className="navbar__menu_list_item_link">Sponsors</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar__buttons">
                    <a href="#registerPopUp" className="navbar__register">
                        Register
                    </a>
                    <a href="#" className="navbar__lang">
                        FA
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
