import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import CreateJobForm from "./CreateJobForm";

class CreateJobContainer extends React.Component {
    state = {
        form: {
            validated: false,
        },
        newJob: {},
    };

    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        const newJob = {
            ...this.state.newJob,
            [event.target.name]: event.target.value,
        };

        this.setState({ newJob });
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

            const formUpdatedState = { ...this.state.form, validated: true };

            this.setState({ form: formUpdatedState });
        } else {
            console.log("OK for submission");

            let newJobsList = [];
            newJobsList.push(this.state.newJob);

            console.log(JSON.stringify(newJobsList));

            this.props.actions
                .createJob(newJobsList)
                .catch((error) => alert("Error creating job. " + error));
        }
    };

    render() {
        const form = this.state.form;

        return (
            <Row>
                <Card body className="shadow">
                    <h5>Create Job Opening</h5>
                    <hr />
                    <CreateJobForm
                        form={form}
                        handleSubmit={this.handleSubmit}
                        handleFormChange={this.handleFormChange}
                        job={this.state.newJob}
                    />
                </Card>
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        jobs: state.jobs,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            createJob: bindActionCreators(jobActions.createJob, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobContainer);
