import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './login-form.css';

export default function RandomizeGodForm() {
    return (
        <div>
            <form class="randomizer-form">

                <label for="assassin-check">Include Assassins</label>
                <div class="form-input">
                    <input type="checkbox" name="assassin-check" id="assassin-check" checked />
                </div>

                <label for="hunter-check">Include Hunters</label>
                <div class="form-input">
                    <input type="checkbox" name="hunter-check" id="hunter-check" checked />
                </div>

                <label for="guardian-check">Include Guardians</label>
                <div class="form-input">
                    <input type="checkbox" name="guardian-check" id="guardian-check" checked />
                </div>

                <label for="mage-check">Include Mages</label>
                <div class="form-input">
                    <input type="checkbox" name="mage-check" id="mage-check" checked />
                </div>

                <label for="warrior-check">Include Warriors</label>
                <div class="form-input">
                    <input type="checkbox" name="warrior-check" id="warrior-check" checked />
                </div>

                <button type="submit" class="randomize-god-button"><Link to="/results" class='link'>Random God!</Link></button>

            </form>
        </div>
    );
}
