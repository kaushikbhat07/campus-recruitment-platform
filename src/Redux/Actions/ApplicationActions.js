import * as types from "./ActionTypes";
import * as applicationApi from "../../api/applicationApi";

export function createApplicationSuccess(application) {
    return { type: types.CREATE_APPLICATION_SUCCESS, application: application };
}

export function applyJob(jobId, studentId) {
    return function (dispatch) {
        return applicationApi
            .createApplcation(jobId, studentId)
            .then((application) => {
                setTimeout(
                    () => dispatch(createApplicationSuccess(application)),
                    2000
                );
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                throw error;
            });
    };
}
