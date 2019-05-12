import { TOGGLE_GOD, TOGGLE_EDIT, toggleGod } from '../actions/actions';
const { API_BASE_URL } = require('../components/config');

const initialState = {
    Assassin: true,
    Guardian: true,
    Hunter: true,
    Mage: true,
    Warrior: true,
    editGod: "",
    editID: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GOD:
            return { ...state, [action.payload]: !state[action.payload] };
        case TOGGLE_EDIT:
            return { ...state, editID: action.payload };
        default:
            return state
    };

}