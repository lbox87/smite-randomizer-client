import React from 'react';

import ItemResults from './item-results';
// import './landing-page.css';

export default function ItemResultsPage() {
    return (
        <div>
            <p>Click an Item to re-roll it!</p>
            <div className="random-item-results">
                <img src="" alt="item1" id="item-1" />
                <img src="" alt="item2" id="item-2" />
                <img src="" alt="item3" id="item-3" />
                <img src="" alt="item4" id="item-4" />
                <img src="" alt="item5" id="item-5" />
                <img src="" alt="item6" id="item-6" />
            {/* <ItemResultsButtons /> */}
        </div>
            {/* <ItemResults /> */}
        </div>
    );
}