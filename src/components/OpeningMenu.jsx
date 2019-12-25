import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/home-page.scss';

function OpeningMenu() {
    return (
        <>
            <div className="openingMenu">
                <ul className="openingMenu__list">
                    <a className="openingMenu__close">&times;</a>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#">Home</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#">The Speakers</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#">Our Team</a>
                    </li>
                    <li className="openingMenu__item">
                        <Link className="openingMenu__link" to="/sponsers">Sponsors</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default OpeningMenu;
