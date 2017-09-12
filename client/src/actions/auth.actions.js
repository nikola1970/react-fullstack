import { USER_LOGGED_IN } from "../constants";
import api from "../api";

export const userLoggedIn = (user) => {
    return {
        type: USER_LOGGED_IN,
        user
    }
};


export const login = (credentials) => (dispatch) => api.user.login(credentials).then(res => {
    if (res.data.success) {
        dispatch(userLoggedIn(res.data.user));
        return res;
    } else {
        return res;
    }
});