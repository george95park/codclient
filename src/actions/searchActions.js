import { FILTER_USERS, ALL_USERS } from "../actions/types";
import axios from "axios";
import config from "../../config/config";
let endpoint = config.API_HOST;

export const filterUsers = (allUsers, user) => dispatch => {
    const rx = new RegExp(user, 'ig');
    let data = allUsers.filter(item => rx.test(item.username));
    dispatch({
        type: FILTER_USERS,
        payload: data
    });
}

export const setAllUsers = () => dispatch => {
    axios.get(endpoint + "/getallusers")
    .then(res => {
        dispatch({
            type: ALL_USERS,
            payload: res.data
        });
    })
    .catch(error => {
        console.log(error);
    });
}
