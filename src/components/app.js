import React from 'react';

import Header from './header';
import LandingPage from './landing-page';

// import './app.css';

export default function App() {
    return (
        <div>
            <Header />
            <main role="main">
            <LandingPage />
            </main>
        </div>

    );
}