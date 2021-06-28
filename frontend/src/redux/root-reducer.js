import { combineReducers } from "redux";
import leadReducer from './lead/lead.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    lead: leadReducer,
    user: userReducer
});

export default rootReducer;