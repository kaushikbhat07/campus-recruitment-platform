import React from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import ManageJobs from "./ManageJobs";

class ManageJobsContainer extends React.Component {
    componentDidMount() {
        this.props.actions
            .loadJobs()
            .catch((error) => console.error("Error loading jobs. " + error));
    }

    onClickDeleteJob = (jobId) => this.props.actions.deleteJob(jobId);

    render() {
        const { jobs } = this.props;

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Current Published Jobs</h5>
                    {
                        //show error if no jobs are available
                        jobs.length === 0 ? (
                            <Alert variant="danger">
                                <Alert.Heading>
                                    No jobs available at the moment!
                                </Alert.Heading>
                                <p>
                                    You have not added any jobs yet! Go ahead
                                    and add new jobs.
                                </p>
                            </Alert>
                        ) : (
                            <ManageJobs
                                jobs={jobs}
                                onClickDeleteJob={this.onClickDeleteJob}
                            />
                        )
                    }
                </div>
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
            loadJobs: bindActionCreators(jobActions.loadJobs, dispatch),
            deleteJob: bindActionCreators(jobActions.deleteJob, dispatch),
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageJobsContainer);
