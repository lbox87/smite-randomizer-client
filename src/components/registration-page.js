import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // go to user's builds if they are logged in
    if (props.loggedIn) {
        return <Redirect to="/mybuilds" />;
    }
    // go to registration form if not logged in
    return (
        <div className="container">
            <h2>Set up your account!</h2>
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
