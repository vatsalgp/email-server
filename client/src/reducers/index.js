import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

const reducers = combineReducers({
    auth: authReducer,
    surveys: surveysReducer
});

export default reducers;