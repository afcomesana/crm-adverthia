import { createSelector } from 'reselect';

export const selectLead = state => state.lead;

export const selectLeads = createSelector(
    [selectLead],
    lead => lead.leads
);

export const selectIsLeadsFetching = createSelector(
    [selectLead],
    lead => lead.isFetching
);

export const selectCandidates = createSelector(
    [selectLeads],
    leads => leads ? leads.filter(item => item.stage === "candidato") : null
);

export const selectCustomers = createSelector(
    [selectLeads],
    leads => leads ? leads.filter(item => item.stage === "cliente") : null
);

export const selectChances = createSelector(
    [selectLeads],
    leads => leads ? leads.filter(item => item.stage === "oportunidad") : null
);