import { TOGGLE_GOD, toggleGod } from '../actions/actions';
const { API_BASE_URL } = require('../config');

const initialState = {
    Assassin: true,
    Guardian: true,
    Hunter: true,
    Mage: true,
    Warrior: true,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GOD:
            return { ...state, [action.payload]: !state[action.payload] };
        default:
            return state
    }

}