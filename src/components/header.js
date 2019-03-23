import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header() {
    return (
        <header class='container'>
            <h1>SMITE God Randomizer</h1>
            <TopNav />
        </header>
    );
}
