import { handleResponse, handleError } from "./apiUtils";
import * as env from "../env.json";

const retrieveJobUrl = env.HOST + "/job/view/all";
const retrieveJobByIdUrl = env.HOST + "/job/view/";
const createJobUrl = env.HOST + "/job/new/multiple";
const deleteJobUrl = env.HOST + "/job/delete/";
const modifyJobUrl = env.HOST + "/job/update";

export function getJobs() {
    return fetch(retrieveJobUrl).then(handleResponse).catch(handleError);
}

export function getJobById(jobId) {
    return fetch(retrieveJobByIdUrl + "?id=" + jobId)
        .then(handleResponse)
        .catch(handleError);
}

export function createJob(job) {
    return fetch(createJobUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(job),
    })
        .then(handleResponse)
        .catch(handleError);
}

export function modifyJob(job) {
    return fetch(modifyJobUrl, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(job),
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteJob(jobId) {
    return fetch(deleteJobUrl + "?id=" + jobId, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
    })
        .then(handleResponse)
        .catch(handleError);
}
