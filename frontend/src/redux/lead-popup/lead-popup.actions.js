import leadPopupActionTypes from "./lead-popup.types"

export const openLeadPopup = lead => ({
    type: leadPopupActionTypes.OPEN_POPUP,
    payload: lead
});

export const closeLeadPopup = () => ({
    type: leadPopupActionTypes.CLOSE_POPUP
});