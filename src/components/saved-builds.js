import React from 'react';

import SavedBuildsButtons from './saved-builds-buttons';
// import './landing-page.css';

export default function SavedBuilds() {
    return (
        <div>
            <ul className="saved-builds">
                <li className="build-1" id="this-will-be-a-get-request-result">
                    <h3>{}</h3>
                    <div className="saved-god-results" id="saved-1">
                        {/* <img src={} alt={} className="god-image"/>
                        <img src={} alt={} id="item-1"/>
                        <img src={} alt={} id="item-1"/>
                        <img src={} alt={} id="item-1"/>
                        <img src={} alt={} id="item-1"/>
                        <img src={} alt={} id="item-1"/>
                        <img src={} alt={} id="item-1"/> */}
                        {/* <SavedBuildsButtons /> */}
                    </div>
                </li>
            </ul>
        </div>
    );
}