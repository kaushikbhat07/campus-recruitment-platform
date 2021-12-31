import * as types from "../Actions/ActionTypes";

export default function studentReducer(state = [], action) {
    switch (action.type) {
        // case types.CREATE_JOBS_SUCCESS:
        //     return [...state, ...action.job];
        case types.LOAD_STUDENT_SUCCESS:
            return action.student;
        // case types.DELETE_JOBS_SUCCESS:
        //     return action.jobs;
        case types.MODIFY_STUDENT_SUCCESS:
            return state.map((student) =>
                student.studentId === action.student.studentId
                    ? action.student
                    : student
            );
        default:
            return state;
    }
}
