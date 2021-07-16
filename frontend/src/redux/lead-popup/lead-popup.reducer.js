import leadPopupActionTypes from "./lead-popup.types";

const INITIAL_STATE = {
    isOpen: false,
    lead: null,
    section: null
}

const leadPopupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case leadPopupActionTypes.OPEN_POPUP:
            return {
                ...state,
                isOpen: true,
                lead: action.payload,
                section: 'info'
            }

        case leadPopupActionTypes.CLOSE_POPUP:
            return {
                ...state,
                isOpen: false,
                lead: null,
                section: null
            }

        case leadPopupActionTypes.CHANGE_POPUP_SECTION:
            return {
                ...state,
                section: action.payload
            }
        default:
            return state
    }
}

export default leadPopupReducer;