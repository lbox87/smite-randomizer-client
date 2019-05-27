import React from 'react';
import './about-app.css';

export default function AboutApp() {
    return (
        <div className="container about">
            <h2>Welcome to SMITE God Randomizer!</h2>
            <p>
                SMITE God Randomizer is a companion app to HiRez's video game "SMITE" that
                allows you to randomize any God from the game's roster.
                Once a God is randomed, you can also random the God's item build. If you create a profile,
                you will be able to save and revisit your favorite builds!
            </p>
            <p>
                Sign in below or click "Register" at the top if you don't have an account. Click "Continue without log in" if you want to jump
                right into randomizing.
            </p>
        </div>
    );
}