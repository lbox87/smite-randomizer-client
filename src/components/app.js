import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './header';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import RandomizePage from './randomize-page';
import GodResultPage from './god-result-page';
import SavedBuildsPage from './saved-builds-page';

// import './app.css';

export default function App() {
    return (
        <Router>
        <div>
            <Header />
            <main role="main">
            {/* <LandingPage />
            <RegistrationPage />
            <RandomizePage />
            <GodResultPage />
            <SavedBuildsPage /> */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/randomize" component={RandomizePage} />
            <Route exact path="/results" component={GodResultPage} />
            <Route exact path="/mybuilds" component={SavedBuildsPage} />
            </main>
        </div>
        </Router>
    );
}