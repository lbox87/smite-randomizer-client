import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SavedBuilds from './saved-builds';
// import './landing-page.css';

export default function SavedBuildsPage() {
    return (
        <div class='container'>
            <h2>Your Saved Builds</h2>
            <p>Click Edit Build to re-roll items in your build.</p>
            <p>Click Delete Build to remove it from your list.</p>
            <button type="button" class="new-random"> <Link to="/results" class='link'>Randomize a New God</Link></button>
            <SavedBuilds />
        </div>
    );
}