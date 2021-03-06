import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './header';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import RandomizeGodForm from './randomize-god-form';
import GodResultPage from './god-result-page';
import SavedBuildsPage from './saved-builds-page';

import './app.css';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <main role="main">
                    <div className="main-image">
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/registration" component={RegistrationPage} />
                        <Route exact path="/randomize" component={RandomizeGodForm} />
                        <Route exact path="/results" component={GodResultPage} />
                        <Route exact path="/mybuilds" component={SavedBuildsPage} />
                    </div>
            </main>
        </div>
        </Router >
    );
}