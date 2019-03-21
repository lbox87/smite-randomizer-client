import React from 'react';

import Zeus from './images/zeus.jpg'
import GodResultButtons from './god-result-buttons';
// import './landing-page.css';

export default function GodResult() {
    return (
        <div class="random-god-results">
            <img src={Zeus} alt="zeus" class="god-image" />
            <GodResultButtons />
        </div>
    );
}
