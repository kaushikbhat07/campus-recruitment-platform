import * as types from "../Actions/ActionTypes";

export default function jobReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_JOBS_SUCCESS:
            return [...state, ...action.job];
        case types.LOAD_JOBS_SUCCESS:
            return action.jobs;
        case types.DELETE_JOBS_SUCCESS:
            return action.jobs;
        case types.MODIFY_JOBS_SUCCESS:
            const newState = state;
            return newState.map((job) =>
                job.jobId === action.job.jobId ? action.job : job
            );
        default:
            return state;
    }
}
