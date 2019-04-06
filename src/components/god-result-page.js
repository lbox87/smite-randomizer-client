import React from 'react';

import GodResult from './god-result';
import ItemResultsPage from './item-results-page';
// import './landing-page.css';

export default function GodResultPage(props) {
    return (
        <div className=''>
            <h2>You Randomed <span className="god-name-result">{props.god}</span></h2>
            <img src={props.image} alt={props.god} className="god-image" />

            <ItemResultsPage />
            
        </div>
    );
}