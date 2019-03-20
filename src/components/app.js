import React from 'react';

import TopNav from './top-nav';

// import './board.css';

export default function App() {
    return (
        <div className="header">
            <h1>SMITE God Randomizer</h1>
            <TopNav />
            {/* <ul className="lists">
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
            </ul> */}
        </div>
    );
}