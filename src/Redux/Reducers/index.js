import { combineReducers } from "redux";
import jobs from "./jobReducer";
import student from "./studentReducer";

// the RHS jobs is the state returned from reducer function
const rootReducer = combineReducers({
    jobs: jobs,
    student: student,
});

export default rootReducer;
