import React from 'react';

// import './landing-page.css';

export default function GodResultButtons() {
    return (
        <div className="god-button-options">
            <button type="button" className="randomize-god-button">Roll a Different God!</button>

            <button type="button" className="god-filters-button">Change God Filters!</button>

            <button type="button" className="randomize-gear-button">Randomize Item Set!</button>
        </div>
    );
}
