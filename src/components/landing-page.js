import React from 'react';

import AboutApp from './about-app';
import LoginForm from './login-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/mybuilds" />;
    }
    return (
        <div className='container'>
            <AboutApp />
            <LoginForm />

            <p className="disclaimer">
                This is a fan-made app from a long time lover of the game.
                I am not affiliated with HiRez and all images are assets belonging to HiRez.
                You can apply to use their API for both SMITE and Paladins 
                <a
                href="https://www.hirezstudios.com/wp-content/themes/hi-rez-studios/pdf/smite-api-developer-guide.pdf"> here
                </a>.
                Check out the game <a href="https://www.smitegame.com/">here</a> if you want to learn more about it.
            </p>
        </div>
    );
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(LandingPage);