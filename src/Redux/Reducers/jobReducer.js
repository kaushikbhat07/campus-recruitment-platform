import * as types from "../Actions/ActionTypes";

export default function jobReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, { ...action.job }];
        default:
            return state;
    }
}
