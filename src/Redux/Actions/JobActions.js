import * as types from "./ActionTypes";
import * as jobApi from "../../api/jobApi";

export function createJobSuccess(job) {
    return { type: types.CREATE_JOBS_SUCCESS, job: job };
}

export function modifyJobsSuccess(job) {
    return { type: types.MODIFY_JOBS_SUCCESS, job: job };
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
                alert("Error loading job.");
                // throw error;
            });
    };
}

export function loadJobById(jobId) {
    return function (dispatch) {
        return jobApi
            .getJobById(jobId)
            .then((jobs) => {
                setTimeout(() => dispatch(loadJobsSuccess(jobs)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error loading job.");
                // throw error;
            });
    };
}

export function modifyJob(job) {
    return function (dispatch) {
        return jobApi
            .modifyJob(job)
            .then((job) => {
                alert("Job modified successfully.");
                setTimeout(() => dispatch(modifyJobsSuccess(job)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error modifying job.");
                // throw error;
            });
    };
}

export function createJob(job) {
    return function (dispatch) {
        return jobApi
            .createJob(job)
            .then((job) => {
                alert(
                    "Job created. View the new job posting under Manage Jobs option"
                );
                setTimeout(() => dispatch(createJobSuccess(job)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error! Job could not be created. ");
                // throw error;
            });
    };
}

export function deleteJob(jobId) {
    return function (dispatch) {
        return jobApi
            .deleteJob(jobId)
            .then((jobs) => {
                alert("Job with the ID: " + jobId + " deleted");
                setTimeout(() => dispatch(deleteJobSuccess(jobs)), 0);
            })
            .catch((error) => {
                alert(
                    "Job could not be deleted. Note that you cannot delete the jobs that have applicants!"
                );
            });
    };
}
// job[{}, {}]
