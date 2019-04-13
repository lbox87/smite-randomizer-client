import { TOGGLE_GOD, toggleGod } from './actions';
const { API_BASE_URL } = require('./components/config');

const initialState = {
    Assassin: true,
    Guardian: true,
    Hunter: true,
    Mage: true,
    Warrior: true,
    // god: "Zeus",
    // image: "https://i.imgur.com/GqzWmPi.jpg",
    // class: "Warrior"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GOD:
            return { ...state, [action.payload]: !state[action.payload] };
        default:
            return state
    }

}