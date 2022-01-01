import { handleResponse, handleError } from "./apiUtils";
import * as env from "../env.json";

const retrieveStudentByIdUrl = env.HOST + "/student/view/";
const modifyStudentUrl = env.HOST + "/student/update/";
const addStudentUrl = env.HOST + "/student/new/";

export function getStudentById(studentId) {
    return fetch(retrieveStudentByIdUrl + "?id=" + studentId)
        .then(handleResponse)
        .catch(handleError);
}

export function updateStudent(student) {
    return fetch(modifyStudentUrl, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(student),
    })
        .then(handleResponse)
        .catch(handleError);
}

export function addStudent(student) {
    return fetch(addStudentUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(student),
    })
        .then(handleResponse)
        .catch(handleError);
}
