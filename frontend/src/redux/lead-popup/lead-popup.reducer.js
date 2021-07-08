import leadPopupActionTypes from "./lead-popup.types";

const INITIAL_STATE = {
    isOpen: false,
    lead: null
}

const leadPopupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case leadPopupActionTypes.OPEN_POPUP:
            return {
                ...state,
                isOpen: true,
                lead: action.payload
            }

        case leadPopupActionTypes.CLOSE_POPUP:
            return {
                ...state,
                isOpen: false,
                lead: null
            }
        default:
            return state
    }
}

export default leadPopupReducer;