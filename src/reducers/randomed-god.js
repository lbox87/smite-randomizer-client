import * as actions from '../actions/toggle-god';
// const { API_BASE_URL } = require('../components/config');

const initialState = {
    god: "",
    image: "",
    class: ""
}

export default (state = initialState, action) => {
    if (action.type === actions.GET_GOD_SUCCESS){
        return{

        }
    }
}