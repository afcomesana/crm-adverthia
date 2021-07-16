import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import leadReducer from './lead/lead.reducer';
import userReducer from './user/user.reducer';
import leadPopupReducer from './lead-popup/lead-popup.reducer';
import recordReducer from "./record/record.reducer";
import persistStore from "redux-persist/lib/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const rootReducer = combineReducers({
    lead: leadReducer,
    user: userReducer,
    leadPopup: leadPopupReducer,
    record: recordReducer
});

export default persistReducer(persistConfig, rootReducer);