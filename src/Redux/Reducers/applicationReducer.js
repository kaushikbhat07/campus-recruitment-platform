import * as types from "../Actions/ActionTypes";

export default function applicationReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_APPLICATION_SUCCESS:
            return [...state, ...action.application];
        default:
            return state;
    }
}
