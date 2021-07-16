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

export const selectPopupLeadId = createSelector(
    [selectPopupLead],
    lead => lead.lead_id
);

export const selectPopupSection = createSelector(
    [selectLeadPopup],
    leadPopup => leadPopup.section
);