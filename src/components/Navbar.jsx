import React from 'react';
import '../assets/styles/home-page.scss'
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
        request: true
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
                console.log(res.status);
                console.log(res.data);
                // window.location.reload(true);
                window.open(domain, '_self');
                if (res.status !== 200)
                    this.setState({request: false});
            })
            .catch(err => {
                if (err.response.status !== 200)
                    this.setState({request: false});
                // this.setState({request: res.status});
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
                            <li className="navbar__menu_list_item"><Link to="/sponsors"
                                                                      className="navbar__menu_list_item_link">Sponsors</Link>
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
                                <Link to="/sponsors">
                                    <li>Sponsors</li>
                                </Link>
                            </ul>
                        </div>
                    </nav>
                    <div className="registerPopUp" id="registerPopUp">
                        <div className="registerPopUp__content">
                            <a className="registerPopUp__closebtn" href="#">Exit</a>

                            <div className="container">
                                <h2 className="description__title">SEE YOU NEXT YEAR!</h2>
                                <span className="underline_red"></span>
                                <span className="underline_black"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar;
