import React from 'react';

import GodResult from './god-result';
import ItemResultsPage from './item-results-page';
// import './landing-page.css';

export default function GodResultPage() {
    return (
        <div className='container'>
            <h2>You Randomed <span className="god-name-result">Zeus</span>!</h2>
            <GodResult />
            <ItemResultsPage />
            
        </div>
    );
}