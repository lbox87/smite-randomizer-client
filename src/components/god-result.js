import React from 'react';

import Zeus from './images/zeus.jpg'
import GodResultButtons from './god-result-buttons';
// import './landing-page.css';

export default function GodResult() {
    return (
        <div className="random-god-results">
            <img src={Zeus} alt="zeus" className="god-image" />
            <GodResultButtons />
        </div>
    );
}
