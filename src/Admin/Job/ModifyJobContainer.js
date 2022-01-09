import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import CreateJobForm from "./CreateJobForm";
import * as authActions from "../../Redux/Actions/AuthActions";

class ModifyJobContainer extends React.Component {
    state = {
        form: {
            validated: false,
        },
        newJob: {},
        currentJob: {},
        currentJobUpdated: false,
        jobToBeModified: null,
    };

    componentDidUpdate() {
        if (!this.state.currentJobUpdated) {
            this.setState({
                newJob: this.props.jobToBeModified,
                jobToBeModified: this.props.jobToBeModified,
                currentJobUpdated: true,
            });
        }
    }

    componentDidMount() {
        this.props.actions.checkAuthStatus();

        const jobsSize = this.props.jobs.length;

        // Load job if state doesnt consist of jobs
        if (jobsSize === 0) {
            this.props.actions.loadJobs();
        }
    }

    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        this.setState({
            newJob: {
                ...this.state.newJob,
                [event.target.name]: event.target.value,
            },
        });
        console.log(this.state.newJob);
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
            console.log(this.state.newJob);
            this.props.actions.modifyJob(this.state.newJob);
        }
    };

    render() {
        const form = this.state.form;
        let jobToBeModified = this.state.jobToBeModified;

        return (
            <Row>
                <Card body className="shadow">
                    <h5>Modify Job Opening</h5>
                    <hr />
                    {jobToBeModified && (
                        <CreateJobForm
                            form={form}
                            handleSubmit={this.handleSubmit}
                            handleFormChange={this.handleFormChange}
                            job={jobToBeModified}
                        />
                    )}
                </Card>
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { id } = ownProps.match.params;

    return {
        jobs: state.jobs,
        jobToBeModified: state.jobs.find((job) => job.jobId === parseInt(id)),
        user: state.user,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            modifyJob: bindActionCreators(jobActions.modifyJob, dispatch),
            loadJobById: bindActionCreators(jobActions.loadJobById, dispatch),
            loadJobs: bindActionCreators(jobActions.loadJobs, dispatch),
            checkAuthStatus: bindActionCreators(
                authActions.checkAuthStatus,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyJobContainer);
