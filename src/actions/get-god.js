import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../components/config';
import {normalizeResponseErrors} from './utils';

export const getGod = classFilters => dispatch => {
    return fetch(API_BASE_URL + 'random3', {
        method: "POST",
        body: JSON.stringify(classFilters),
        headers: { "Content-Type": "application/json" },
      })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
