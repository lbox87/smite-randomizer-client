import React from 'react';

import SavedBuilds from './saved-builds';
// import './landing-page.css';

export default function SavedBuildsPage() {
    return (
        <div class='container'>
            <h2>Your Saved Builds</h2>
            <p>Click Edit Build to re-roll items in your build.</p>
            <p>Click Delete Build to remove it from your list.</p>
            <button type="button" class="new-random"> Randomize a New God </button>
            <SavedBuilds />
        </div>
    );
}