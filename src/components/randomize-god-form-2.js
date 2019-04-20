import React from 'react';
import GodResultPage from './god-result-page';
import { connect } from 'react-redux';
import {toggleGod} from '../actions/toggle-god';
// import {getGod} from '../actions/get-god';

import {Field, reduxForm, focus} from 'redux-form';
// import {registerUser} from '../actions/users';
// import {login} from '../actions/auth';
// import Input from './input';
// import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
// const passwordLength = length({min: 10, max: 72});
// const matchesPassword = matches('password');
const {API_BASE_URL} = require('./config');

export class RandomizeGodForm2 extends React.Component {
    onSubmit(values) {
        const {Assassin, Guardian, Hunter, Mage, Warrior} = values;
        const godFilters = {Assassin, Guardian, Hunter, Mage, Warrior};
        return this.props
            .dispatch(getGod(godFilters))
            .then(() => this.props.dispatch());
    }

    render() {
        return (
            <form
                className="god-filter-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
