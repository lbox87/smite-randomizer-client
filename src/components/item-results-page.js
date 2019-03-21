import React from 'react';

import ItemResults from './item-results';
// import './landing-page.css';

export default function ItemResultsPage() {
    return (
        <div>
            <p>Click an Item to re-roll it!</p>
            <ItemResults />
        </div>
    );
}