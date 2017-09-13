import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../constants";
import api from "../api";

export const userLoggedIn = (user) => {
    return {
        type: USER_LOGGED_IN,
        user
    }
};

export const userLoggedOut = () => {
    return {
        type: USER_LOGGED_OUT
    }
};

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(res => {
    if (res.data.success) {
        localStorage.reactJWT = res.data.user.token;
        dispatch(userLoggedIn(res.data.user));

    }
    return res;
});

export const logout = () => (dispatch) => {
    localStorage.removeItem("reactJWT");
    dispatch(userLoggedOut());
};