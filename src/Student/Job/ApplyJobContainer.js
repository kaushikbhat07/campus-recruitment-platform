import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as applicationActions from "../../Redux/Actions/ApplicationActions";
import * as jobActions from "../../Redux/Actions/JobActions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

class ApplyJobContainer extends Component {
    componentDidMount() {
        const jobsSize = this.props.jobs.length;

        if (jobsSize === 0) {
            this.props.actions.loadJobs();
        }
    }

    /**
     * Applies for job
     * @param {DOM event} event
     */
    handleSubmit = (event) => {
        event.preventDefault();
        const { jobId, studentId } = this.props.match.params;
        console.log(jobId);
        console.log(studentId);
        this.props.actions.applyJob(jobId, studentId);
    };

    render() {
        const jobToBeApplied = this.props.jobToBeApplied;

        return (
            <Row>
                <div>
                    <h5 className="mb-4">
                        <span className="text-danger">
                            Want to review your profile before applying?{" "}
                        </span>
                        <Link to={`/student/profile/7`}>
                            <Button variant="primary" href="#verifyProfile">
                                Click here{" "}
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                        </Link>
                    </h5>

                    <h5 className="mb-4">Apply for job</h5>

                    <Card body className="shadow p-3 mb-4 mt-4">
                        {jobToBeApplied && (
                            <>
                                <h5>{jobToBeApplied.company}</h5>
                                <hr />
                                <div>
                                    <p>ID: {jobToBeApplied.jobId}</p>
                                    <p>CTC: {jobToBeApplied.ctc}</p>
                                    <p>
                                        Eligibility:{" "}
                                        {jobToBeApplied.eligibility}
                                    </p>
                                    <p>
                                        Offer type: {jobToBeApplied.offerType}
                                    </p>
                                    <p>description: {jobToBeApplied.jobDesc}</p>
                                </div>
                                <div className="text-muted text-end">
                                    2 days ago
                                </div>
                                <hr />
                                <div className="text-end">
                                    <Button
                                        variant="success"
                                        href="#verifyProfile"
                                        onClick={this.handleSubmit}
                                    >
                                        Apply{" "}
                                        <i className="bi bi-pencil-square"></i>
                                    </Button>
                                </div>
                            </>
                        )}
                    </Card>
                </div>
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { jobId } = ownProps.match.params;

    return {
        jobs: state.jobs,
        jobToBeApplied: state.jobs.find((job) => job.jobId === parseInt(jobId)),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            loadJobs: bindActionCreators(jobActions.loadJobs, dispatch),
            applyJob: bindActionCreators(applicationActions.applyJob, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJobContainer);
