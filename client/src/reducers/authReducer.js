// null -> we don't know
// true -> logged in
// false -> logged out

const INITIAL_STATE = {
    isSignedIn: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;