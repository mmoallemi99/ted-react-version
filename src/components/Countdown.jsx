import React from 'react';
import '../assets/styles/home-page.scss'

class Countdown extends React.Component {
    countDownDate = new Date("Dec 27, 2019 09:00:00").getTime();

    constructor(props) {
        super(props);
        let now = new Date().getTime();
        let distance = this.countDownDate - now;
        this.state = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    }

    componentDidMount() {
        this.myInterval = setInterval((seconds) => {
            if (this.state.seconds === 0) {
                if (this.state.minutes === 0) {
                    this.setState(({hours}) => ({
                        seconds: 60,
                        minutes: 59,
                        hours: hours - 1
                    }));
                    if (this.state.hours === 0) {
                        this.setState(({days}) => ({
                            seconds: 60,
                            minutes: 59,
                            hours: 23,
                            days: days - 1
                        }));
                    }
                } else {
                    this.setState(({minutes}) => ({
                        seconds: 60,
                        minutes: minutes - 1
                    }));
                }

            }
            this.setState(({seconds}) => ({
                seconds: seconds - 1
            }));
        }, 1000)
    }
    render() {
        const {days, hours, minutes, seconds} = this.state;
        return (
            <section className="countdown">
                <div className="container">
                    <h2 className="countdown__title">Countdown</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                </div>
                <div className="countdown__paragraph">
                    <div className="countdown__circle days" id="days">{days}</div>
                    <div className="countdown__circle hours" id="hours">{hours}</div>
                    <div className="countdown__circle minutes" id="minutes">{minutes}</div>
                    <div className="countdown__circle seconds" id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</div>
                    <div className="expiredAlert" id="expired"></div>
                </div>
            </section>
        )
    }


}

export default Countdown
