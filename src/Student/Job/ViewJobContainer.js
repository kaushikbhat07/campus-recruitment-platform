import React from "react";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import ViewJobs from "./ViewJobs";

class ViewJobContainer extends React.Component {
    componentDidMount() {
        this.props.actions
            .loadJobs()
            .catch((error) => alert("Error loading jobs. " + error));
    }

    render() {
        const { jobs } = this.props;

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Job Openings</h5>
                    <ViewJobs jobs={jobs} />
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
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewJobContainer);
