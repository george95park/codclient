import {
    UPDATE_FORM_TYPE,
    UPDATE_FORM_GUN,
    UPDATE_ATTACHMENTS,
    UPDATE_DESCRIPTION,
    CLEAR_FORM_VALUES
} from "./types";
import axios from "axios";
import config from "../../config/config";
let endpoint = config.API_HOST;

export const clearFormValues = () => dispatch => {
    dispatch({
        type: CLEAR_FORM_VALUES
    })
}

export const updateFormType = form_type => dispatch => {
    axios.post(endpoint + "/getguns", {
        type: form_type,
    })
    .then(res => {
        dispatch({
            type: UPDATE_FORM_TYPE,
            guns: res.data,
            form_type: form_type
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const updateFormGun = form_gun => dispatch => {
    axios.post(endpoint + "/getattachments", {
        gun_id: form_gun.gun_id,
    })
    .then(res => {
        dispatch({
            type: UPDATE_FORM_GUN,
            attachments: res.data,
            form_gun: form_gun
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const updateAttachments = form_attachments => dispatch => {
    dispatch({
        type: UPDATE_ATTACHMENTS,
        form_attachments: form_attachments
    })
}
export const clearAttachments = () => dispatch => {
    dispatch({
        type: UPDATE_ATTACHMENTS,
    })
}

export const updateDescription = form_description => dispatch => {
    dispatch({
        type: UPDATE_DESCRIPTION,
        form_description: form_description
    })
}
