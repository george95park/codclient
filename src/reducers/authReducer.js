import { LOGIN, LOGOUT, LOGIN_FAILED } from "../actions/types";

const initialState = {
    user: {},
    error: {},
}

export default function (state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                error: {}
            };
        case LOGOUT:
            return {
                ...state,
                user: {}
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
