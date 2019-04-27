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
                        <Link to="/randomize" className='link'>Roll a New God</Link>
                        <Link to="/mybuilds" className='link'>My Saved Builds</Link>
                </div>
            </nav>

        </header>
        )
    }
    return (
        <header className='container'>
            <h1>SMITE God Randomizer</h1>
            <nav>
                <div className='links-top-wrapper'>
                        <Link to="/" className='link'>Sign in</Link>
                        <Link to="/registration" className='link'>Register</Link>
                        <Link to="/randomize" className='link'>Continue without log in</Link>
                </div>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Header);