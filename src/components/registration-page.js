// import React from 'react';

// import RegistrationForm from './registration-form';
// // import './landing-page.css';

// export default function RegistrationPage() {
//     return (
//         <div className='container'>
//             <h2>Set up your account!</h2>
//             <RegistrationForm />
//         </div>
//     );
// }

import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/mybuilds" />;
    }
    return (
        <div className="container">
            <h2>Set up your account!</h2>
            <RegistrationForm />
            {/* <Link to="/">Login</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
