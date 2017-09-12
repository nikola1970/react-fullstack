import { USER_LOGGED_IN } from "../constants";

const AuthReducer = (state = {}, action = {}) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user;
        default:
            return state;
    }
};

export default AuthReducer;