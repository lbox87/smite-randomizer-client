import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css';

export function Header(props) {
    if (props.loggedIn) {
        return (
<header className='container'>
            <h1>SMITE God Randomizer</h1>
            <nav>
                <div className='links-top-wrapper'>
                    <ul className="ul-top">
                        <li><Link to="/randomize" className='link'>Roll a New God</Link></li>
                        <li><Link to="/mybuilds" className='link'>My Saved Builds</Link></li>
                    </ul>
                </div>
            </nav>
            {/* <TopNav /> */}
        </header>
        )
    }
    return (
        <header className='container'>
            <h1>SMITE God Randomizer</h1>
            <nav>
                <div className='links-top-wrapper'>
                    <ul className="ul-top">
                        <li><Link to="/" className='link'>Sign in</Link></li>
                        <li><Link to="/registration" className='link'>Register</Link></li>
                        <li><Link to="/randomize" className='link'>Continue without log in</Link></li>
                    </ul>
                </div>
            </nav>
            {/* <TopNav /> */}
        </header>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Header);