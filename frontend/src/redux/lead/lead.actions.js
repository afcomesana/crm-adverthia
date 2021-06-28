import leadActionTypes from "./lead.types"

export const fetchLeadsStart = () => ({
    type: leadActionTypes.FETCH_LEADS_START
});

export const fetchLeadsSuccess = leads => ({
    type: leadActionTypes.FETCH_LEADS_SUCCESS,
    payload: leads
});

export const fetchLeadsFailure = error => ({
    type: leadActionTypes.FETCH_LEADS_FAILURE,
    payload: error
});

export const changeStageStart = data => ({
    type: leadActionTypes.CHANGE_STAGE_START,
    payload: data
});

export const changeStageSuccess = () => ({
    type: leadActionTypes.CHANGE_STAGE_SUCCESS
});

export const changeStageFailure = error => ({
    type: leadActionTypes.CHANGE_STAGE_FAILURE,
    payload: error.message
});