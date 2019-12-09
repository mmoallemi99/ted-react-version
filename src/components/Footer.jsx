import React from 'react'
import '../assets/styles/home-page.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__socials">
                    <li className="footer__socials_item">
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li className="footer__socials_item">
                        <a href="#"><i className="fa fa-telegram"></i></a>
                    </li>
                    <li className="footer__socials_item">
                        <a href="#"><i className="fa fa-instagram"></i></a>
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
