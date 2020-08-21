import { LOGIN, LOGOUT, LOGIN_FAILED } from "./types";
import axios from "axios";
import config from "../../config/config";
let endpoint = config.API_HOST;

export const signup = (user, history) => dispatch => {
    if (user.password !== user.password_confirmation) {
        dispatch({
            type: LOGIN_FAILED,
            payload: {
                message: "Passwords do not match."
            }
        })
    }
    else {
        axios.post(endpoint + "/signup", {
            username: user.username,
            password: user.password
        }, { withCredentials: true })
        .then(res => {
            dispatch({
                type: LOGIN,
                payload: res.data
            });
            history.push("/");
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAILED,
                payload: error.response.data
            })
        })
    }
}

export const login = (user, history) => dispatch => {
    axios.post(endpoint + "/login", {
        username: user.username,
        password: user.password
    }, { withCredentials: true })
    .then(res => {
        dispatch({
            type: LOGIN,
            payload: res.data
        });
        history.push("/");
    })
    .catch(error => {
        dispatch({
            type: LOGIN_FAILED,
            payload: error.response.data
        })
    });
}

export const logout = () => dispatch => {
    axios.get(endpoint + "/logout", { withCredentials: true })
    .then(res => {
        dispatch({
            type: LOGOUT,
        });
    })
    .catch(error => {
        console.log("Logout error: ", error);
    })

}

export const authUser = () => dispatch => {
    axios.get(endpoint + "/authuser", { withCredentials: true })
    .then(res => {
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    }).catch(error => {
        dispatch({
            type: LOGIN_FAILED,
            payload: error.response.data
        })
    });
}
