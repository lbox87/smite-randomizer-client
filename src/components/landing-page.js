import React from 'react';

import AboutApp from './about-app';
import LoginForm from './login-form';
// import './landing-page.css';

export default function LandingPage() {
    return (
        <div className='container'>
            <AboutApp />
            <LoginForm />
        </div>
    );
}
