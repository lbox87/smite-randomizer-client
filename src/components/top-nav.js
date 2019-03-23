import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './top-nav.css';

export default function TopNav() {
    return (
        <nav>
            <div class='links-top-wrapper'>
            <ul class="ul-top">
                <li>
                    {/* <a href=""
                        className=""
                        aria-label="Register"
                    // onClick={() => props.onRegister()}
                    >
                        Register
                    </a> */}
                    <Link to="/registration" class='link'>Register</Link>
                </li>
                <li>
                    {/* <a href=""
                        className=""
                        aria-label="Sign in"
                    //   onClick={() => props.onSignIn()}
                    >
                        Sign in
                    </a> */}
                    <Link to="/" class='link'>Sign in</Link>
                </li>
                <li>
                    {/* <a href=""
                        className=""
                        aria-label="Continue without log in"
                    //   onClick={() => props.onLoadRandomizer()}
                    >
                        Continue without log in
                    </a> */}
                    <Link to="/randomize" class='link'>Continue without log in</Link>
                </li>
                <li>
                    {/* <a href=""
                        className=""
                    //   onClick={() => props.onLoadProfile()}
                    >
                        My Saved Builds
                    </a> */}
                    <Link to="/mybuilds" class='link'>My Saved Builds</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}