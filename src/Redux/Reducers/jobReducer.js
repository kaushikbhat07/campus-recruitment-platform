export default function jobReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, { ...action.job }];
        default:
            return state;
    }
}
