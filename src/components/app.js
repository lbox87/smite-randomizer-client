import React from 'react';

import Header from './header';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';

// import './app.css';

export default function App() {
    return (
        <div>
            <Header />
            <main role="main">
            <LandingPage />
            <RegistrationPage />
            </main>
        </div>

    );
}