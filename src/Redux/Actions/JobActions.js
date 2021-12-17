import * as types from "./ActionTypes";
import * as jobApi from "../../api/jobApi";

export function createJobSuccess(job) {
    return { type: types.CREATE_JOBS_SUCCESS, job: job };
}

export function loadJobsSuccess(jobs) {
    return { type: types.LOAD_JOBS_SUCCESS, jobs: jobs };
}

export function deleteJobSuccess(jobs) {
    return { type: types.DELETE_JOBS_SUCCESS, jobs: jobs };
}

export function loadJobs() {
    return function (dispatch) {
        return jobApi
            .getJobs()
            .then((jobs) => {
                setTimeout(() => dispatch(loadJobsSuccess(jobs)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                throw error;
            });
    };
}

export function createJob(job) {
    return function (dispatch) {
        return jobApi
            .createJob(job)
            .then((job) => {
                setTimeout(() => dispatch(createJobSuccess(job)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                throw error;
            });
    };
}

export function deleteJob(jobId) {
    return function (dispatch) {
        return jobApi
            .deleteJob(jobId)
            .then((jobs) => {
                setTimeout(() => dispatch(deleteJobSuccess(jobs)), 2000);
            })
            .catch((error) => {
                throw error;
            });
    };
}
// job[{}, {}]
