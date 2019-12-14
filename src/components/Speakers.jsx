import React from 'react';
import '../assets/styles/home-page.scss';
import speaker from '../assets/images/reza.JPG';
import axios from 'axios';


class Speakers extends React.Component {
    state = {
        speakers: []
    };

    componentDidMount() {
        const domain = window.location.origin;
        axios.get(`${domain}/api/speakers/`)
            .then(res => {
                const speakers = res.data;
                this.setState({ speakers });
            })
    }


    render() {
        let speakers = this.state.speakers.map( function (speaker, index) {
            let person = (
                        <div className="speakers__people_person">
                            <figure className="speakers__people_person_image_overlay">
                                <img src={speaker.picture} alt="" className="speakers__people_person_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/instagram.svg'} width="20px" /></a>
                                    <a className="socialIcon" href="#"><img src={'static/img/src/assets/images/linkedin.svg'} width="20px" /></a>
                                </figcaption>
                            </figure>
                            <h3 className="speakers__people_person_name">{speaker.first_name}<div>&nbsp;</div>{speaker.last_name}</h3>
                            <p className="speakers__people_person_topic">{speaker.topic}</p>
                        </div>
            );
            return person;
        });
        return (
            <section className="speakers">
                <div className="container">
                    <h2 className="speakers__title">Speakers</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                    <div className="speakers__people">
                        {speakers}
                    </div>
                </div>
            </section>
        )
    }
}

export default Speakers;
