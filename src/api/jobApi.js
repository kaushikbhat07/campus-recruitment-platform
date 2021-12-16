import { handleResponse, handleError } from "./apiUtils";
import * as env from "../env.json";

const retrieveJobUrl = env.HOST + "/job/view/all";
const createJobUrl = env.HOST + "/job/new/multiple";

export function getJobs() {
    return fetch(retrieveJobUrl).then(handleResponse).catch(handleError);
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
