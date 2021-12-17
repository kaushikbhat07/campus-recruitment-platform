import React from "react";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import ManageJobs from "./ManageJobs";

class ManageJobsContainer extends React.Component {
    componentDidMount() {
        this.props.actions
            .loadJobs()
            .catch((error) => alert("Error loading jobs. " + error));
    }

    onClickDeleteJob = (jobId) => this.props.actions.deleteJob(jobId);

    render() {
        const { jobs } = this.props;

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Current Published Jobs</h5>
                    <ManageJobs
                        jobs={jobs}
                        onClickDeleteJob={this.onClickDeleteJob}
                    />
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
