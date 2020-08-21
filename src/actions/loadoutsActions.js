import {
    ALL_LOADOUTS,
    CREATE_LOADOUT,
    DELETE_LOADOUT,
    UPDATE_LOADOUT,
    LOADING_LOADOUTS
} from "./types";
import axios from "axios";
import config from "../../config/config";
let endpoint = config.API_HOST;

export const getLoadouts = user_id => dispatch => {
    if (user_id) {
        dispatch({
            type: LOADING_LOADOUTS,
            loading: true
        });
        axios.get(endpoint + "/getloadouts/" + user_id)
        .then(res => {
            dispatch({
                type: ALL_LOADOUTS,
                payload: res.data,
                loading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const createLoadout = (data) => dispatch => {
    axios.post(endpoint + "/createloadout", data)
    .then(res => {
        dispatch({
            type: CREATE_LOADOUT,
            payload: res.data
        });
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteLoadout = (loadout_id, loadouts_list, index) => dispatch => {
    axios.delete(endpoint + "/deleteloadout/" + loadout_id)
    .then(res => {
        loadouts_list.splice(index, 1);
        dispatch({
            type: DELETE_LOADOUT,
            payload: [...loadouts_list]
        });
    })
    .catch(error => {
        console.log("delete loadout error", error);
    })
}

export const updateLoadout = (data, loadouts_list, index) => dispatch => {
    axios.put(endpoint + "/updateloadout", data)
    .then(res => {
        loadouts_list.splice(index, 1, res.data);
        dispatch({
            type: UPDATE_LOADOUT,
            payload: [...loadouts_list]
        })
    })
    .catch(error => {
        console.log("update loadout error", error);
    })
}
