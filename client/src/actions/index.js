import axios from "axios";

export const fetchUser = () => async dispatch => {
    const response = await axios.get("/api/current_user");
    console.log(response.data);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
};
