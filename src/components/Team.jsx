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
                this.setState({team});
            })
    }

    render() {
        const firstName = this.state.team.map( function (person, index) {
            return <li key={index}>{person.first_name}</li>;
        });
        const lastName = this.state.team.map( function (person, index) {
            return <li key={index}>{person.last_name}</li>;
        });
        const role = this.state.team.map( function (person, index) {
            return <li key={index}>{person.role}</li>;
        });

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
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[0]}<div>&nbsp;</div>{lastName[0]}</ul>
                            <p className="team__members_member_position">{role[0]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={b} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[7]}<div>&nbsp;</div>{lastName[7]}</ul>
                            <p className="team__members_member_position">{role[7]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={c} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[10]}<div>&nbsp;</div>{lastName[10]}</ul>
                            <p className="team__members_member_position">{role[10]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={d} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[2]}<div>&nbsp;</div>{lastName[2]}</ul>
                            <p className="team__members_member_position">{role[2]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={e} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[12]}<div>&nbsp;</div>{lastName[12]}</ul>
                            <p className="team__members_member_position">{role[12]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={f} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[3]}<div>&nbsp;</div>{lastName[3]}</ul>
                            <p className="team__members_member_position">{role[3]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={g} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[4]}<div>&nbsp;</div>{lastName[4]}</ul>
                            <p className="team__members_member_position">{role[4]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={h} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[1]}<div>&nbsp;</div>{lastName[1]}</ul>
                            <p className="team__members_member_position">{role[1]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={i} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[14]}<div>&nbsp;</div>{lastName[14]}</ul>
                            <p className="team__members_member_position">{role[14]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={j} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[16]}<div>&nbsp;</div>{lastName[16]}</ul>
                            <p className="team__members_member_position">{role[16]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={k} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[5]}<div>&nbsp;</div>{lastName[5]}</ul>
                            <p className="team__members_member_position">{role[5]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={l} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[8]}<div>&nbsp;</div>{lastName[8]}</ul>
                            <p className="team__members_member_position">{role[8]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={m} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[6]}<div>&nbsp;</div>{lastName[6]}</ul>
                            <p className="team__members_member_position">{role[6]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={n} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[13]}<div>&nbsp;</div>{lastName[13]}</ul>
                            <p className="team__members_member_position">{role[13]}</p>
                        </div>

                        <div className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={o} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{firstName[17]}<div>&nbsp;</div>{lastName[17]}</ul>
                            <p className="team__members_member_position">{role[17]}</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }


}

export default Team;
