import {
    ALL_LOADOUTS,
    CREATE_LOADOUT,
    DELETE_LOADOUT,
    UPDATE_LOADOUT,
    LOADING_LOADOUTS,
} from "../actions/types";

const initialState = {
    loadouts_list: [],
    new_loadout: {},
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ALL_LOADOUTS:
            return {
                ...state,
                loadouts_list: action.payload,
                loading: action.loading
            };
        case LOADING_LOADOUTS:
            return {
                ...state,
                loading: action.loading
            }
        case CREATE_LOADOUT:
            return {
                ...state,
                new_loadout: {}
            }
        case DELETE_LOADOUT:
            return {
                ...state,
                loadouts_list: action.payload
        };
        case UPDATE_LOADOUT:
            return {
                ...state,
                loadouts_list: action.payload
        };
        default:
            return state;
    }
}
