import React from 'react';

// import './login-form.css';

export default function RegistrationForm() {
    return (
        <div>
            <form class="registration-form">

            <label for="username">Username</label>
            <div class="form-input">
                <input type="text" name="username" id="username" />
            </div>

            <label for="password">Password</label>
            <div class="form-input">
                <input type="password" name="password" id="password" />
            </div>

            <label for="passwordConfirm">Confirm password</label>
            <div class="form-input">
                <input type="password" name="passwordConfirm" id="passwordConfirm" />
            </div>

            <button type="submit" class="register-button">Register</button>

            </form>
        </div>
    );
}
