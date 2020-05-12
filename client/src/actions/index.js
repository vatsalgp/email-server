import axios from "axios";

export const fetchUser = () => async dispatch => {
    const response = await axios.get("/api/current_user");
    if (response.data) {
        const { credits, googleId } = response.data;
        dispatch({
            type: "FETCH_USER",
            payload: { credits, googleId, isSignedIn: true }
        });
    } else {
        dispatch({
            type: "FETCH_USER",
            payload: { isSignedIn: false }
        });
    }
};

export const handleToken = token => async dispatch => {
    const response = await axios.post("/api/stripe", token);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
};