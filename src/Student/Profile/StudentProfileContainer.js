import React, { Component } from "react";
import { connect } from "react-redux";
import * as studentActions from "../../Redux/Actions/StudentActions";
import { bindActionCreators } from "redux";
import Row from "react-bootstrap/Row";
import StudentProfile from "./StudentProfile";

class StudentProfileContainer extends Component {
    state = {
        form: {
            validated: false,
        },
        newStudent: {},
        currentStudent: null,
        currentStudentUpdated: false,
    };

    componentDidUpdate() {
        if (!this.state.currentStudentUpdated) {
            // this.setState({ newStudent: this.props.student });
            this.props.student.map((student) =>
                this.setState({ currentStudent: student, newStudent: student })
            );
            this.setState({ currentStudentUpdated: true });
        }
    }

    componentDidMount() {
        const studentSize = this.props.student.length;

        // Load student if state doesnt consist of student
        if (studentSize === 0) {
            const { id } = this.props.match.params;
            this.props.actions.loadStudentById(parseInt(id));
        }
    }

    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        this.setState({
            newStudent: {
                ...this.state.newStudent,
                [event.target.name]: event.target.value,
            },
        });
        console.log("handleFormChange: ");
        console.log(this.state.newStudent);
    };

    enableValidationMessages = () => {
        const formUpdatedState = {
            ...this.state.form,
            validated: true,
        };
        this.setState({ form: formUpdatedState });
    };

    /**
     * Does bootstrap form validation
     * @param {DOM event} event
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log("NO GO for submission");
            event.stopPropagation();

            this.enableValidationMessages();
        } else {
            this.enableValidationMessages();

            console.log("handleSubmit: ");
            console.log(this.state.newStudent);
            console.log("OK for submission");

            this.props.actions.modifyStudent(this.state.newStudent);
        }
    };

    render() {
        const { currentStudent } = this.state;

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Your profile</h5>
                    {currentStudent !== null && (
                        <StudentProfile
                            student={currentStudent}
                            handleSubmit={this.handleSubmit}
                            handleFormChange={this.handleFormChange}
                            form={this.state.form}
                        />
                    )}
                </div>
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        student: state.student,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            loadStudentById: bindActionCreators(
                studentActions.loadStudentById,
                dispatch
            ),
            modifyStudent: bindActionCreators(
                studentActions.modifyStudent,
                dispatch
            ),
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentProfileContainer);
