import leadActionTypes from "./lead.types";

const INITIAL_STATE = {
    leads: null,
    isFetching: false,
    errorMessage: undefined
};

const leadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case leadActionTypes.FETCH_LEADS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                leads: action.payload
            }
        case leadActionTypes.FETCH_LEADS_START:
            return {
                ...state,
                isFetching: true
            }
        case leadActionTypes.FETCH_LEADS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload.message
            }
        default:
            return state;
    }
}

export default leadReducer;