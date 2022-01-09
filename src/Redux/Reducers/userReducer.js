import * as types from "../Actions/ActionTypes";

export default function userReducer(state = null, action) {
    switch (action.type) {
        case types.CREATE_USER_SUCCESS:
            return {
                uid: action.user.uid,
                email: action.user.email,
                authStatus: true,
            };
        case types.USER_SIGNED_IN:
            return {
                uid: action.user.uid,
                email: action.user.email,
                authStatus: true,
                role: action.user.role,
            };
        case types.USER_SIGNED_OUT:
            return { authStatus: false };
        default:
            return state;
    }
}
