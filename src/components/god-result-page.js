import React from 'react';

import GodResult from './god-result';
import ItemResultsPage from './item-results-page';
// import './landing-page.css';

export default function GodResultPage() {
    return (
        <div>
            <h2>You Randomed <span class="god-name-result">Zeus</span>!</h2>
            <GodResult />
            <ItemResultsPage />
        </div>
    );
}