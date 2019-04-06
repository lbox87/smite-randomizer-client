import React from 'react';

// import './login-form.css';

export default function RegistrationForm() {
    return (
        <div>
            <form className="registration-form">

            <label for="username">Username</label>
            <div className="form-input">
                <input type="text" name="username" id="username" />
            </div>

            <label for="password">Password</label>
            <div className="form-input">
                <input type="password" name="password" id="password" />
            </div>

            <label for="passwordConfirm">Confirm password</label>
            <div className="form-input">
                <input type="password" name="passwordConfirm" id="passwordConfirm" />
            </div>

            <button type="submit" className="register-button">Register</button>

            </form>
        </div>
    );
}
