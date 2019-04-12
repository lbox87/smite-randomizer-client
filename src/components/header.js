import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './header.css';

export default function Header() {
    return (
        <header className='container'>
            <h1>SMITE God Randomizer</h1>
            <nav>
            <div className='links-top-wrapper'>
            <ul className="ul-top">
            <li>
                    {/* <a href=""
                        className=""
                        aria-label="Sign in"
                    //   onClick={() => props.onSignIn()}
                    >
                        Sign in
                    </a> */}
                    <Link to="/" className='link'>Sign in</Link>
                </li>
                <li>
                    <Link to="/registration" className='link'>Register</Link>
                </li>
                <li>
                    <Link to="/randomize" className='link'>Continue without log in</Link>
                </li>
                <li>
                    <Link to="/mybuilds" className='link'>My Saved Builds</Link>
                </li>
            </ul>
            </div>
        </nav>
            {/* <TopNav /> */}
        </header>
    );
}
