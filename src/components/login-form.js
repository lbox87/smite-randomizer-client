import React from 'react';

// import './login-form.css';

export default function LoginForm() {
    return (
        <div>
            <label for="username">Username</label>
            <div className="form-input username">
                <input type="text" name="username" id="username" />
            </div>

            <label for="password">Password</label>
            <div className="form-input password">
                <input type="password" name="password" id="password" />
            </div>

            <button type="submit" className="login-button">Log In</button>
        </div>
    );
}
