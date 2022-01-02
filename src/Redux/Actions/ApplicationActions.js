import * as types from "./ActionTypes";
import * as applicationApi from "../../api/applicationApi";

export function createApplicationSuccess(application) {
    return { type: types.CREATE_APPLICATION_SUCCESS, application: application };
}

export function loadApplicationsByJobIdSuccess(application) {
    return {
        type: types.LOAD_APPLICATIONS_BY_JOB_ID_SUCCESS,
        application: application,
    };
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

export function loadApplicationsByJobId(jobId) {
    return function (dispatch) {
        return applicationApi
            .getApplicationsByJobId(jobId)
            .then((applications) => {
                setTimeout(
                    () =>
                        dispatch(loadApplicationsByJobIdSuccess(applications)),
                    2000
                );
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                throw error;
            });
    };
}
