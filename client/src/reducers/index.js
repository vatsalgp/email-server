import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

const reducers = combineReducers({
    auth: authReducer,
    surveys: surveysReducer,
    form: formReducer
});

export default reducers;