import { createSelector } from 'reselect';

const selectLeadPopup = state => state.leadPopup;

export const selectIsPopupOpen = createSelector(
    [selectLeadPopup],
    leadPopup => leadPopup.isOpen
);

export const selectPopupLead = createSelector(
    [selectLeadPopup],
    leadPopup => leadPopup.lead  
);