import React from "react";
    import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";
import ViewJobs from "./ViewJobs";

class ViewJobContainer extends React.Component {
    componentDidMount() {
        this.props.actions
            .loadJobs()
            .catch((error) => console.error("Error loading jobs. " + error));
    }

    render() {
        const { jobs } = this.props;
        console.log(jobs);

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Job Openings</h5>

                    {
                        //show error if no jobs are available
                        jobs.length === 0 ? (
                            <Alert variant="danger">
                                <Alert.Heading>
                                    No jobs available at the moment!
                                </Alert.Heading>
                                <p>
                                    Sorry! No jobs are open right now. Tell your
                                    college to be a little competent and get
                                    some companies.
                                </p>
                            </Alert>
                        ) : (
                            <ViewJobs jobs={jobs} />
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
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewJobContainer);
