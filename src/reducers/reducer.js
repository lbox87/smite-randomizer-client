import { TOGGLE_GOD, TOGGLE_EDIT_IMAGE,TOGGLE_EDIT_GOD, TOGGLE_EDIT_ID, TOGGLE_EDIT_IMAGE1, TOGGLE_EDIT_IMAGE2,TOGGLE_EDIT_IMAGE3,TOGGLE_EDIT_IMAGE4,TOGGLE_EDIT_IMAGE5,TOGGLE_EDIT_IMAGE6,TOGGLE_EDIT_ITEM1,TOGGLE_EDIT_ITEM2,TOGGLE_EDIT_ITEM3,TOGGLE_EDIT_ITEM4,TOGGLE_EDIT_ITEM5,TOGGLE_EDIT_ITEM6} from '../actions/actions';
// const { API_BASE_URL } = require('../components/config');

const initialState = {
    Assassin: true,
    Guardian: true,
    Hunter: true,
    Mage: true,
    Warrior: true,
    editId: "",
    editGod: "",
    editImage: "",
    editItem1: "",
    editItem2: "",
    editItem3: "",
    editItem4: "",
    editItem5: "",
    editItem6: "",
    editImage1: "",
    editImage2: "",
    editImage3: "",
    editImage4: "",
    editImage5: "",
    editImage6: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GOD:
            return { ...state, [action.payload]: !state[action.payload] };
        case TOGGLE_EDIT_ID:
            return { ...state, editId: action.payload };
        case TOGGLE_EDIT_GOD:
            return { ...state, editGod: action.payload };
        case TOGGLE_EDIT_IMAGE:
            return { ...state, editImage: action.payload };
        case TOGGLE_EDIT_ITEM1:
            return { ...state, editItem1: action.payload };
        case TOGGLE_EDIT_ITEM2:
            return { ...state, editItem2: action.payload };
        case TOGGLE_EDIT_ITEM3:
            return { ...state, editItem3: action.payload };
        case TOGGLE_EDIT_ITEM4:
            return { ...state, editItem4: action.payload };
        case TOGGLE_EDIT_ITEM5:
            return { ...state, editItem5: action.payload };
        case TOGGLE_EDIT_ITEM6:
            return { ...state, editItem6: action.payload };
        case TOGGLE_EDIT_IMAGE1:
            return { ...state, editImage1: action.payload };
        case TOGGLE_EDIT_IMAGE2:
            return { ...state, editImage2: action.payload };
        case TOGGLE_EDIT_IMAGE3:
            return { ...state, editImage3: action.payload };
        case TOGGLE_EDIT_IMAGE4:
            return { ...state, editImage4: action.payload };
        case TOGGLE_EDIT_IMAGE5:
            return { ...state, editImage5: action.payload };
        case TOGGLE_EDIT_IMAGE6:
            return { ...state, editImage6: action.payload };
        default:
            return state
    };

}