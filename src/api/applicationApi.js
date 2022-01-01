import { handleResponse, handleError } from "./apiUtils";
import * as env from "../env.json";

let createApplicationUrl = env.HOST + "/applicant/job/";

export function createApplcation(jobId, studentId) {
    createApplicationUrl += jobId + "/student/" + studentId + "/new";

    return fetch(createApplicationUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
    })
        .then(handleResponse)
        .catch(handleError);
}
