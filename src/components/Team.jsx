import React from 'react'
import '../assets/styles/home-page.scss'
import a from '../assets/images/1.jpg'
import b from '../assets/images/2.jpg'
import c from '../assets/images/3.jpg'
import d from '../assets/images/4.jpg'
import e from '../assets/images/5.jpg'
import f from '../assets/images/6.jpg'
import g from '../assets/images/7.jpg'
import h from '../assets/images/8.jpg'
import i from '../assets/images/9.jpg'
import j from '../assets/images/10.jpg'
import k from '../assets/images/11.jpg'
import l from '../assets/images/12.jpg'
import m from '../assets/images/13.jpg'
import n from '../assets/images/14.jpg'
import o from '../assets/images/15.jpg'
import axios from 'axios'

class Team extends React.Component {
    state = {
        team: []
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/staffs/`)
            .then(res => {
                const team = res.data;
                this.setState({ team });
            })
    }

    render() {
        return (
            <section className="team">
                <div className="container">
                    <h2 className="team__title">Our Team</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                    <div className="team__members">
                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={a} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={b} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={c} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={d} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={e} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={f} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={g} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={h} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={i} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={j} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={k} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={l} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={m} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={n} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={o} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="socialIcon" href="#"><i className="fa fa-linkedin-square"></i></a>
                                </figcaption>
                            </figure>
                            <h3 className="team__members_member_name">Farid Shokri</h3>
                            <p className="team__members_member_position">Blah Blah Blah.</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }


}

export default Team;
