import { handleResponse, handleError } from "./apiUtils";
import * as env from "../env.json";

export function createApplcation(jobId, studentId) {
    const createApplicationUrl =
        env.HOST + "/applicant/job/" + jobId + "/student/" + studentId + "/new";

    return fetch(createApplicationUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getApplicationsByJobId(jobId) {
    const getApplicationsByJobIdUrl =
        env.HOST + "/applicant/view/" + jobId + "/applications";

    return fetch(getApplicationsByJobIdUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(handleResponse)
        .catch(handleError);
}
