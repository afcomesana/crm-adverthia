import { createSelector } from "reselect";

const selectRecord = state => state.record;

export const selectNotes = createSelector(
    [selectRecord],
    record => record.notes
);