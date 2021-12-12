import { combineReducers } from "redux";
import jobs from "./jobReducer";

// the RHS jobs is the state returned from reducer function
const rootReducer = combineReducers({
    jobs: jobs,
});

export default rootReducer;
