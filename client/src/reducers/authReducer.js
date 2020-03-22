// null -> we don't know
// string -> logged in
// false -> logged out

const authReducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload || false;
        default:
            return state;
    }
};

export default authReducer;