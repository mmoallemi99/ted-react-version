import React from 'react';
import '../assets/styles/home-page.scss'
import '../assets/styles/responsive-sponsers.scss'
import '../assets/styles/sponsors.css'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import logo from '../assets/images/Logo.png'
import logoBlack from '../assets/images/logo_black.png'
import silver1 from '../assets/images/Silver-1.png'
import silver2 from '../assets/images/Silver-2.png'
import silver3 from '../assets/images/Silver-3.png'
import bronze1 from '../assets/images/Bronze-1.png'
import bronze2 from '../assets/images/Bronze-2.png'
import bronze3 from '../assets/images/Bronze-3.png'
import bronze4 from '../assets/images/Bronze-4.png'


export const Sponsors = () => {
    return (
        <>
            <div className="openingMenu">
                <ul className="openingMenu__list">
                    <a className="openingMenu__close">&times;</a>
                    <li className="openingMenu__item">
                        <Link className="openingMenu__link" to="/">Home</Link>
                    </li>
                    <li className="openingMenu__item">
                        <a href="#" className="openingMenu__link">The Speakers</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#">Our Team</a>
                    </li>
                    <li className="openingMenu__item">
                        <Link className="openingMenu__link" to="/sponsors">Sponsors</Link>
                    </li>
                </ul>
            </div>
            <div className="mainWhole">
                <nav className="stickyNavbar">
                    <div className="navbar__container">
                        <div className="stickyNavbar__brand">
                            <nav role="navigation1">
                                <div id="menuToggle1">
                                    <input type="checkbox" />
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <ul id="menu1">
                                            <a href="#">
                                                <li>Home</li>
                                            </a>
                                            <a href="#speakers">
                                                <li>The Speakers</li>
                                            </a>
                                            <a href="#team">
                                                <li>Our Team</li>
                                            </a>
                                            <a href="/sponsors">
                                                <li>Sponsors</li>
                                            </a>
                                        </ul>
                                </div>
                            </nav>
                            <img src={logoBlack} alt=""/>
                        </div>
                        <div className="stickyNavbar__menu">
                            <ul className="stickyNavbar__menu_list">
                                <li className="stickyNavbar__menu_list_item"><Link to="/"
                                                                                   className="stickyNavbar__menu_list_item_link">Home</Link>
                                </li>
                                <li className="stickyNavbar__menu_list_item"><a href="#"
                                                                                className="stickyNavbar__menu_list_item_link">The
                                    Speakers</a></li>
                                <li className="stickyNavbar__menu_list_item"><a href="#"
                                                                                className="stickyNavbar__menu_list_item_link">Our
                                    Team</a></li>
                                <li className="stickyNavbar__menu_list_item"><a
                                    className="stickyNavbar__menu_list_item_link">Sponsors</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
                <section className="description description__sponsors">
                    <div className="container">
                        <h2 className="description__title">Sponsors</h2>
                        <span className="underline_red"></span>
                        <span className="underline_black"></span>
                    </div>
                    <div className="description__paragraph">

                        <div className="sponsors">
                            <div className="sponsors_title">Gold</div>
                            <span className="break--2"></span>
                        </div>

                        <span className="break"></span>

                        <div className="sponsors">
                            <div className="sponsors_title">Silver</div>
                            <span className="break--2"></span>
                            <div className="sponsors_gallery">
                                <img className="sponsors__picture" src={silver1}/>
                                <img className="sponsors__picture" src={silver2}/>
                                <img className="sponsors__picture" src={silver3}/>
                            </div>
                        </div>

                        <span className="break"></span>

                        <div className="sponsors">
                            <div className="sponsors_title">Bronze</div>
                            <span className="break--2"></span>
                            <div className="sponsors_gallery">
                                <img className="sponsors__picture" src={bronze1}/>
                                <img className="sponsors__picture" src={bronze2}/>
                                <img className="sponsors__picture" src={bronze3}/>
                                <img className="sponsors__picture" src={bronze4}/>
                            </div>
                        </div>

                    </div>
                </section>
                {/*<footer className="footer">*/}
                {/*    <div className="container">*/}
                {/*        <ul className="footer__socials">*/}
                {/*            <li className="footer__socials_item">*/}
                {/*                <a href="#"><i className="fa fa-twitter"></i></a>*/}
                {/*            </li>*/}
                {/*            <li className="footer__socials_item">*/}
                {/*                <a href="#"><i className="fa fa-telegram"></i></a>*/}
                {/*            </li>*/}
                {/*            <li className="footer__socials_item">*/}
                {/*                <a href="#"><i className="fa fa-instagram"></i></a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <a href="#" className="footer__link">Send Us Your Email</a>*/}
                {/*        <p className="footer__copyright">*/}
                {/*            This independent TEDx event is operated under license from TED. | Copyright &copy; 2019*/}
                {/*            TEDxUniversityOfIsfahan | All Rights Reserved.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</footer>*/}
                <Footer/>
                <div className="registerPopUp" id="registerPopUp">
                    <div className="registerPopUp__content">
                        <a className="registerPopUp__closebtn" href="#"><i className="fa fa-remove"></i></a>

                        <div className="container">
                            <h2 className="description__title">SEE YOU NEXT YEAR!</h2>
                            <span className="underline_red"></span>
                            <span className="underline_black"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
