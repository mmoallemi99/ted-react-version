import React from 'react';
import '../assets/styles/home-page.scss';
import speaker from '../assets/images/reza.JPG';
import { ReactComponent as Instagram } from '../assets/images/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg'


function Speakers() {
    return (
        <section className="speakers">
            <div className="container">
                <h2 className="speakers__title">Speakers</h2>
                <span className="underline_red"></span>
                <span className="underline_black"></span>
                <div className="speakers__people">
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                    <div className="speakers__people_person">
                        <figure className="speakers__people_person_image_overlay">
                            <img src={speaker} alt="" className="speakers__people_person_image"/>
                            <figcaption className="icons">
                                <a className="socialIcon" href="#"><Instagram width="20px" /></a>
                                <a className="socialIcon" href="#"><Linkedin width="20px" /></a>
                            </figcaption>
                        </figure>
                        <h3 className="speakers__people_person_name">Farid Shokri</h3>
                        <p className="speakers__people_person_topic">Blah Blah Blah.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speakers
