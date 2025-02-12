import * as types from "./ActionTypes";
import * as studentApi from "../../api/studentApi";

export function loadStudentSuccess(student) {
    return { type: types.LOAD_STUDENT_SUCCESS, student: student };
}

export function modifyStudentSuccess(student) {
    return { type: types.MODIFY_STUDENT_SUCCESS, student: student };
}

export function createStudentSuccess(student) {
    return { type: types.CREATE_STUDENT_SUCCESS, student: student };
}

export function loadStudentById(studentId) {
    return function (dispatch) {
        return studentApi
            .getStudentById(studentId)
            .then((student) => {
                setTimeout(() => dispatch(loadStudentSuccess(student)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error loading student.");
                // throw error;
            });
    };
}

export function modifyStudent(student) {
    return function (dispatch) {
        return studentApi
            .updateStudent(student)
            .then((student) => {
                alert("Student modified successfully.");
                setTimeout(() => dispatch(modifyStudentSuccess(student)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error modifying student.");
                // throw error;
            });
    };
}

export function createStudent(student) {
    return function (dispatch) {
        return studentApi
            .addStudent(student)
            .then((student) => {
                alert("Student added successfully.");
                setTimeout(() => dispatch(createStudentSuccess(student)), 2000);
                // dispatch(loadJobsSuccess(jobs));
            })
            .catch((error) => {
                alert("Error creating student.");
                // throw error;
            });
    };
}
