import React from 'react';

import './top-nav.css';

export default function TopNav() {
    return (
        <nav>
            <div class='links-top-wrapper'>
            <ul class="ul-top">
                <li>
                    <a href=""
                        className=""
                        aria-label="Register"
                    // onClick={() => props.onRegister()}
                    >
                        Register
                    </a>
                </li>
                <li>
                    <a href=""
                        className=""
                        aria-label="Sign in"
                    //   onClick={() => props.onSignIn()}
                    >
                        Sign in
                    </a>
                </li>
                <li>
                    <a href=""
                        className=""
                        aria-label="Continue without log in"
                    //   onClick={() => props.onLoadRandomizer()}
                    >
                        Continue without log in
                    </a>
                </li>
                <li>
                    <a href=""
                        className=""
                    //   onClick={() => props.onLoadProfile()}
                    >
                        My Saved Builds
                    </a>
                </li>
            </ul>
            </div>
        </nav>
    );
}