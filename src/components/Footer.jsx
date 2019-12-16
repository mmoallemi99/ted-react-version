import React from 'react'
import '../assets/styles/home-page.scss'

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <ul className="footer__socials">
                            <li className="footer__socials_item">
                                <a href="#"><img src={'static/img/src/assets/images/twitter.svg'} width="65px"/></a>
                            </li>
                            <li className="footer__socials_item">
                                <a href="#"><img src={'static/img/src/assets/images/telegram.svg'} width="65px"
                                                 style={{marginRight: "1rem"}}/></a>
                            </li>
                            <li className="footer__socials_item">
                                <a href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="65px"/></a>
                            </li>
                        </ul>
                        <a href="#" className="footer__link">Send Us Your Email</a>
                        <p className="footer__copyright">
                            This independent TEDx event is operated under license from TED. | Copyright &copy; 2019
                            TEDxUniversityOfIsfahan | All Rights Reserved.| This website is created by <a
                            href="https://www.linkedin.com/in/rezahasani78/" className="web-creators" target="_blank">Reza
                            Hasani</a> & <a href="https://www.linkedin.com/in/farid-shokri/" className="web-creators" target="_blank">Farid
                            Shokri</a> & <a href="https://www.linkedin.com/in/mmoallemi99/" className="web-creators" target="_blank">Mohammad
                            Moallemi</a>
                        </p>
                    </div>
                </footer>

            </>
        )
    }
}

export default Footer;
