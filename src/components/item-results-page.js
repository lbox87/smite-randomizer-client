import React from 'react';

import ItemResults from './item-results';

// import './landing-page.css';

export default function ItemResultsPage(props) {
    return (
        <div>
            <p>Click an Item to re-roll it!</p>
            <div className="random-item-results">
                <img src={props.image1} alt="item1" id="item-1"/>
                <img src={props.image2} alt="item2" id="item-2" />
                <img src={props.image3} alt="item3" id="item-3" />
                <img src={props.image4} alt="item4" id="item-4" />
                <img src={props.image5} alt="item5" id="item-5" />
                <img src={props.image6} alt="item6" id="item-6" />
                
            {/* <ItemResultsButtons /> */}
        </div>
            {/* <ItemResults /> */}
        </div>
    );
}