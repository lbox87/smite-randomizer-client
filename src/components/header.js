import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

export function Header(props) {
    // header if user is logged in
    if (props.loggedIn) {
        return (
            <header className='container'>
                <div className="header-image">
                    <h1 className="title">SMITE God Randomizer</h1>
                    <nav>
                        <div className='links-top-wrapper'>
                            <Link to="/randomize" className='link'>Random New God</Link>
                            <Link to="/mybuilds" className='link'>My Saved Builds</Link>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
    // header if user is not logged in    
    return (
        <header className='container'>
            <div className="header-image">
                <h1 className="title">SMITE God Randomizer</h1>
                <nav>
                    <div className='links-top-wrapper'>
                        <Link to="/" className='link'>Sign in</Link>
                        <Link to="/registration" className='link'>Register</Link>
                        <Link to="/randomize" className='link'>Continue without log in</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Header);