import React from 'react'
import '../assets/styles/home-page.scss'
import { ReactComponent as Instagram } from '../assets/images/instagram.svg'
import { ReactComponent as Telegram } from '../assets/images/telegram.svg'
import { ReactComponent as Twitter } from '../assets/images/twitter.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__socials">
                    <li className="footer__socials_item">
                        <a href="#"><Twitter width="65px" /></a>
                    </li>
                    <li className="footer__socials_item">
                        <a href="#"><Telegram width="65px" style={{marginRight: "1rem"}} /></a>
                    </li>
                    <li className="footer__socials_item">
                        <a href="#"><Instagram width="65px" /></a>
                    </li>
                </ul>
                <a href="#" className="footer__link">Send Us Your Email</a>
                <p className="footer__copyright">
                    This independent TEDx event is operated under license from TED. | Copyright &copy; 2019
                    TEDxUniversityOfIsfahan | All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
