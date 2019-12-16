import React from 'react';
import '../assets/styles/home-page.scss'
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg'
import axios from 'axios'


class Navbar extends React.Component {
    state = {
        full_name: "",
        email: "",
        phone_number: "",
        career: "",
        degree: "",
        school: "",
        study: "",
        start: "",
        end: "",
        before_tedxes: "",
        what_made_you: "",
        how_familiar: "",
        expects: "",
    };

    handleChange1 = event => {
        this.setState({full_name: event.target.value});
    };
    handleChange2 = event => {
        this.setState({email: event.target.value});
    };
    handleChange3 = event => {
        this.setState({phone_number: event.target.value});
    };
    handleChange4 = event => {
        this.setState({career: event.target.value});
    };
    handleChange5 = event => {
        this.setState({degree: event.target.value});
    };
    handleChange6 = event => {
        this.setState({school: event.target.value});
    };
    handleChange7 = event => {
        this.setState({study: event.target.value});
    };
    handleChange8 = event => {
        this.setState({start: Number(event.target.value)});
    };
    handleChange9 = event => {
        this.setState({end: Number(event.target.value)});
    };
    handleChange10 = event => {
        this.setState({before_tedxes: event.target.value});
    };
    handleChange11 = event => {
        this.setState({what_made_you: event.target.value});
    };
    handleChange12 = event => {
        this.setState({how_familiar: event.target.value});
    };
    handleChange13 = event => {
        this.setState({expects: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        const all = {
            full_name: this.state.full_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            career: this.state.career,
            degree: this.state.degree,
            school: this.state.school,
            study: this.state.study,
            start: this.state.start,
            end: this.state.end,
            before_tedxes: this.state.before_tedxes,
            what_made_you: this.state.what_made_you,
            how_familiar: this.state.how_familiar,
            expects: this.state.expects
        };

        const domain = window.location.origin;
        axios.post(`${domain}/api/register/`, all)
            .then(res => {
                console.log(res);
                console.log(res.data);
                // window.location.reload(true);
                window.open(domain, '_self');
            })
            .catch(err => {
                console.table(err);
                console.table(err.data);
            })
    };


    render() {

        return (
            <nav className="navbar">
                <div className="navbar__container">

                    <div className="navbar__menu">
                        <ul className="navbar__menu_list">
                            <li className="navbar__menu_list_item"><a href="#"
                                                                      className="navbar__menu_list_item_link">Home</a>
                            </li>
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
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox"/>
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                                <a href="#">
                                    <li>Home</li>
                                </a>
                                <a href="#">
                                    <li>The Speakers</li>
                                </a>
                                <a href="#">
                                    <li>Our Team</li>
                                </a>
                                <a href="#">
                                    <li>SponsersregisterPopUp__info</li>
                                </a>
                            </ul>
                        </div>
                    </nav>

                    <div className="navbar__buttons">
                        <a href="#registerPopUp" className="navbar__register">
                            Register
                        </a>
                        <a href="#" className="navbar__lang">
                            FA
                        </a>
                    </div>
                    <div className="registerPopUp" id="registerPopUp">
                        <div className="registerPopUp__content">
                            <a className="registerPopUp__closebtn" href="#">Exit</a>

                            <div className="container">
                                <h2 className="description__title">Register</h2>
                                <span className="underline_red"></span>
                                <span className="underline_black"></span>
                                <div className="registerPopUp__info">
                                    <p>Filling this form does not mean you have registered for the event. We will
                                        contact you after reviewing your request.</p>
                                    <p>Ticket price for University of Isfahan students will be 50 thousand tomans, for
                                        other students 75 thousand toman and the others will be 100 thousand tomans.</p>
                                </div>

                            </div>

                            <form action="#" className="form" method="post">

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name"
                                           onChange={this.handleChange1}
                                           required/>
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email Address" id="email"
                                           onChange={this.handleChange2}
                                           required/>
                                    <label htmlFor="email" className="form__label">Email Address</label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Phone Number" id="phone"
                                           onChange={this.handleChange3}
                                           required/>
                                    <label htmlFor="phone" className="form__label">Phone Number</label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Career" id="career"
                                           onChange={this.handleChange4}
                                           required/>
                                    <label htmlFor="career" className="form__label">Career</label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Degree" id="degree"
                                           onChange={this.handleChange5}
                                           required/>
                                    <label htmlFor="degree" className="form__label">Degree</label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="School" id="school"
                                           onChange={this.handleChange6}
                                           required/>
                                    <label htmlFor="school" className="form__label">School</label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Field of Study" id="study"
                                           onChange={this.handleChange7}
                                           required/>
                                    <label htmlFor="study" className="form__label">Field of Study</label>
                                </div>


                                <div className="form__group">
                                    <input type="number" className="form__input" placeholder="Start Year" id="start"
                                           onChange={this.handleChange8}
                                           required/>
                                    <label htmlFor="start" className="form__label">Start Year</label>
                                </div>

                                <div className="form__group">
                                    <input type="number" className="form__input" placeholder="End Year (or expected)"
                                           onChange={this.handleChange9}
                                           id="end" required/>
                                    <label htmlFor="end" className="form__label">End Year (or expected)</label>
                                </div>

                                <div className="form__group">
                                    <label className="form__label--2" htmlFor="msg1">Have you ever attended to a TEDx
                                        event?
                                        If you answered yes, what was the event?
                                    </label>
                                    <textarea onFocus="this.value = ''" className="form__textarea"
                                              onChange={this.handleChange10} id="msg1" required>
                            </textarea>
                                </div>

                                <div className="form__group">
                                    <label className="form__label--2" htmlFor="msg2">What made you attend to
                                        TEDxUniversityOfIsfahan?
                                    </label>
                                    <textarea onFocus="this.value = ''" className="form__textarea"
                                              onChange={this.handleChange11} id="msg2" required>
                            </textarea>
                                </div>

                                <div className="form__group">
                                    <label className="form__label--2" htmlFor="msg3">How familiar are you with TEDx and
                                        its
                                        speakers?
                                    </label>
                                    <textarea onFocus="this.value = ''" className="form__textarea"
                                              onChange={this.handleChange12} id="msg3" required>
                            </textarea>
                                </div>

                                <div className="form__group">
                                    <label className="form__label--2" htmlFor="msg4">What are your expectations of the
                                        TEDxUniversityOfIsfahan's speeches?
                                    </label>
                                    <textarea onFocus="this.value = ''" className="form__textarea" id="msg4"
                                              onChange={this.handleChange13} required>
                            </textarea>
                                </div>

                                <div className="form__group--button">
                                    <button className="navbar__register" onClick={this.handleSubmit}>Register</button>
                                </div>
                                <div className="registerPopUp__true">
                                    <p>
                                        You have successfully registered!
                                    </p>
                                </div>

                                <div className="registerPopUp__err">
                                    <p>
                                        A problem occured while registering your request!
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </nav>
        )
    }

}

export default Navbar;
