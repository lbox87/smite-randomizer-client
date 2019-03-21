import React from 'react';

import SavedBuildsButtons from './saved-builds-buttons';
// import './landing-page.css';

export default function SavedBuilds() {
    return (
        <div>
            <ul class="saved-builds">
                <li class="build-1" id="this-will-be-a-get-request-result">
                    <h3>Zues</h3>
                    <div class="saved-god-results" id="saved-1">
                        <img src={require('./images/zeus.jpg')} alt="zeus" class="god-image"/>
                        <img src={require('./images/doom-orb.jpg')} alt="doom-orb" id="item-1"/>
                        <img src={require('./images/ethereal-staff.jpg')} alt="ethereal-staff" id="item-2"/>
                        <img src={require('./images/genjis-guard.jpg')} alt="genjis-guard" id="item-3"/>
                        <img src={require('./images/mantle-of-discord.jpg')} alt="mantle-of-discord" id="item-4"/>
                        <img src={require('./images/shoes-of-the-magi.jpg')} alt="shoes-of-the-magi" id="item-5"/>
                        <img src={require('./images/soul-reaver.jpg')} alt="soul-reaver" id="item-6"/>
                        <SavedBuildsButtons />
                    </div>
                </li>
                <li class="build-2" id="this-will-be-a-get-request-result">
                    <h3>Zues 2</h3>
                    <div class="saved-god-results" id="saved-2">
                        <img src={require('./images/zeus.jpg')} alt="zeus" class="god-image"/>
                        <img src={require('./images/doom-orb.jpg')} alt="doom-orb" id="item-1"/>
                        <img src={require('./images/ethereal-staff.jpg')} alt="ethereal-staff" id="item-2"/>
                        <img src={require('./images/genjis-guard.jpg')} alt="genjis-guard" id="item-3"/>
                        <img src={require('./images/mantle-of-discord.jpg')} alt="mantle-of-discord" id="item-4"/>
                        <img src={require('./images/shoes-of-the-magi.jpg')} alt="shoes-of-the-magi" id="item-5"/>
                        <img src={require('./images/soul-reaver.jpg')} alt="soul-reaver" id="item-6"/>
                        <SavedBuildsButtons />
                    </div>
                </li>
            </ul>
        </div>
    );
}