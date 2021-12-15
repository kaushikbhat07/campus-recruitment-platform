import * as types from "./ActionTypes";

export function createJob(job) {
    return { type: types.CREATE_COURSE, job: job };
}

// job[{}, {}]
