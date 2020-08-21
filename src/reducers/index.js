import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadoutsReducer from "./loadoutsReducer";
import searchReducer from "./searchReducer";
import formReducer from "./formReducer";

export default combineReducers({
    auth: authReducer,
    loadouts: loadoutsReducer,
    search: searchReducer,
    form: formReducer,
});
