import React from 'react';

import GodResult from './god-result';
// import './landing-page.css';

export default function GodResultPage() {
    return (
        <div>
            <h2>You Randomed <span class="god-name-result">Zeus</span>!</h2>
            <GodResult />
        </div>
    );
}