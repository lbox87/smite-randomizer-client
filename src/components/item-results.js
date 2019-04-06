import React from 'react';

// import Zeus from './images/zeus.jpg'
import ItemResultsButtons from './item-results-buttons';
// import './landing-page.css';

export default function ItemResults() {
    return (
        <div className="random-item-results">
                {/* <img src={require('./images/doom-orb.jpg')} alt="doom-orb" id="item-1" />
                <img src={require('./images/ethereal-staff.jpg')} alt="ethereal-staff" id="item-2" />
                <img src={require('./images/genjis-guard.jpg')} alt="genjis-guard" id="item-3" />
                <img src={require('./images/mantle-of-discord.jpg')} alt="mantle-of-discord" id="item-4" />
                <img src={require('./images/shoes-of-the-magi.jpg')} alt="shoes-of-the-magi" id="item-5" />
                <img src={require('./images/soul-reaver.jpg')} alt="soul-reaver" id="item-6" /> */}
            <ItemResultsButtons />
        </div>
    );
}
