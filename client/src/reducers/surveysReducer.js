const surveysReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_SURVEYS":
            return action.payload;
        case "FETCH_SURVEY":
            return [...state, action.payload]
        case "DELETE_SURVEY":
            return [...state];
        default:
            return state;
    }
};

export default surveysReducer;