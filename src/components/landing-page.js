import React from 'react';

import AboutApp from './about-app';
import LoginForm from './login-form';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/mybuilds" />;
        // return <p>you fool!</p>
    }
    return (
        <div className='container'>
            <AboutApp />
            <LoginForm />
        </div>
    );
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(LandingPage);