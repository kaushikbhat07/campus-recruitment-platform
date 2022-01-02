import * as types from "../Actions/ActionTypes";

export default function applicationReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_APPLICATION_SUCCESS:
            return [...state, ...action.application];
        case types.LOAD_APPLICATIONS_BY_JOB_ID_SUCCESS:
            return action.application;
        default:
            return state;
    }
}
