import recordActionTypes from "./record.types";

const INITIAL_STATE = {
    notes: null,
    whatsapp: null,
    phone: null,
    email: null
};

const recordReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case recordActionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.payload
            }
        default:
            return state;
    }
}

export default recordReducer;