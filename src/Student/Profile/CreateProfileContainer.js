import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../Redux/Actions/StudentActions";
import StudentProfile from "./StudentProfile";
import Row from "react-bootstrap/Row";

class CreateProfileContainer extends Component {
    state = {
        form: {
            validated: false,
        },
        currentStudent: {},
        newStudent: {},
    };

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

            this.props.actions.createStudent(this.state.newStudent);
        }
    };

    render() {
        return (
            <Row>
                <div>
                    <h5 className="mb-4">Add Student</h5>
                    <StudentProfile
                        student={this.state.currentStudent}
                        handleSubmit={this.handleSubmit}
                        handleFormChange={this.handleFormChange}
                        form={this.state.form}
                    />
                </div>
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        // student: state.student,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            createStudent: bindActionCreators(
                studentActions.createStudent,
                dispatch
            ),
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProfileContainer);
