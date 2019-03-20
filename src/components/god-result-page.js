import React from 'react';

// import './landing-page.css';

export default function GodResultPage() {
    return (
        <div>
            {/* break this up */}
            <h2>You Randomed <span class="god-name-result">Zeus</span>!</h2>
            <div class="random-god-results">
                <img src="/images/zeus.jpg" alt="zeus" />
                <div class="god-button-options">
                    <button type="button" class="randomize-god-button">Roll a Different God!</button>

                    <button type="button" class="god-filters-button">Change God Filters!</button>

                    <button type="button" class="randomize-gear-button">Randomize Item Set!</button>
                </div>
            </div>
        </div>
    );
}
