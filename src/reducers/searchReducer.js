import { FILTER_USERS, ALL_USERS } from "../actions/types";

const initialState = {
    search_list: [],
    all_users: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FILTER_USERS:
            return {
                ...state,
                search_list: action.payload
            };
        case ALL_USERS:
            return {
                ...state,
                all_users: action.payload
            }
        default:
            return state;
    }
}
