import { combineReducers } from "redux";
import jobs from "./jobReducer";
import student from "./studentReducer";
import application from "./applicationReducer";
import user from "./userReducer";

// the RHS jobs is the state returned from reducer function
const rootReducer = combineReducers({
    jobs: jobs,
    student: student,
    application: application,
    user: user,
});

export default rootReducer;
