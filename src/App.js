import React from 'react';
import HomePage from "./views/HomePage.jsx";
import loader from "./assets/images/audio.svg";
import './assets/styles/home-page.scss'

class App extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({loading: false}));
    }

    render() {
        const {loading} = this.state;

        if (loading) {
            return (
                // <div style={{height: "100vh", backgroundColor: "#2ecc71", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                //     <div style={{color: "white", fontSize: "5rem"}}><span style={{color: "#ff2b06", fontWeight: "700"}}>TEDx</span> is loading</div>
                //     <img src={loader} alt="" style={{width: "7vw", height: "50vh"}} />
                // </div>
                <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader-description"><span
                        style={{color: "#ff2b06", fontWeight: "700"}}>TEDx</span> is Loading...
                    </div>
                    <div className="loader-copyright">React Loader developed and designed © 2020 by <a
                        href="https://www.linkedin.com/in/rezahasani78/" target="_blank"
                        style={{textDecoration: "none", color: "#6bda65"}}> Reza Hasani</a> | All Rights Reserved
                    </div>
                    {/*// <div style={{color: "white", fontSize: "1rem"}}>Reza Hasani <span*/}
                    {/*className="loader-creators-line">&</span> Farid Shokri <span*/}
                    {/*className="loader-creators-line">&</span> Mohammad Moallemi</div>*/}
                </div>
            )
        }

        return (
            <div><HomePage/></div>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

export default App;
