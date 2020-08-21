import {
    UPDATE_FORM_TYPE,
    UPDATE_FORM_GUN,
    UPDATE_ATTACHMENTS,
    UPDATE_DESCRIPTION,
    CLEAR_FORM_VALUES
} from "../actions/types";

const initialState = {
    form_values: {},
    guns: [],
    attachments: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case CLEAR_FORM_VALUES:
            return {
                ...state,
                form_values: {},
                guns: [],
                attachments: []
            }
        case UPDATE_FORM_TYPE:
            return {
                ...state,
                form_values: {
                    ...state.form_values,
                    form_type: action.form_type,
                },
                guns: action.guns
            }
        case UPDATE_FORM_GUN:
            return {
                ...state,
                form_values: {
                    ...state.form_values,
                    form_gun: action.form_gun,
                },
                attachments: action.attachments
            }
        case UPDATE_ATTACHMENTS:
            return {
                ...state,
                form_values: {
                    ...state.form_values,
                    form_attachments: action.form_attachments
                }
            }
        case UPDATE_DESCRIPTION:
            return {
                ...state,
                form_values: {
                    ...state.form_values,
                    form_description: action.form_description
                }
            }
        default:
            return initialState;
    }
}
