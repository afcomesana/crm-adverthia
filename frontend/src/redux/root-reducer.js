import { combineReducers } from "redux";
import leadReducer from './lead/lead.reducer';
import userReducer from './user/user.reducer';
import leadPopupReducer from './lead-popup/lead-popup.reducer';

const rootReducer = combineReducers({
    lead: leadReducer,
    user: userReducer,
    leadPopup: leadPopupReducer
});

export default rootReducer;