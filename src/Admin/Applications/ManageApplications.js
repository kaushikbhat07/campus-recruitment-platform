import React, { Component } from "react";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import * as applicationActions from "../../Redux/Actions/ApplicationActions";
import { bindActionCreators } from "redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import RenderApplications from "./RenderApplications";
import { ReactTableColumns, fields } from "./ReactTableColumns";

class ManageApplications extends Component {
    // data table
    ExpandedComponent = ({ data }) => (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );

    // data table
    handleSelectedRows = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        console.log("Selected Rows: ", selectedRows);
    };

    componentDidMount() {
        const jobsSize = this.props.jobs.length;
        const { jobId } = this.props.match.params;
        // Load job if state doesnt consist of jobs
        if (jobsSize === 0) {
            this.props.actions.loadJobById(jobId);
        }

        // load applications for this job
        this.props.actions.loadApplicationsByJobId(jobId);
    }

    render() {
        const currentJob = this.props.currentJob;

        return (
            <Row>
                <h5 className="mb-4">View Job Applications</h5>
                <div>
                    <Card body className="shadow mb-4 p-3">
                        {currentJob && (
                            <>
                                <h5>{currentJob.company}</h5>
                                <hr />
                                <p>CTC: {currentJob.ctc}</p>
                                <p>Eligibility: {currentJob.eligibility}</p>
                                <p>Offer type: {currentJob.offerType}</p>
                                <p>Job description: {currentJob.jobDesc}</p>
                            </>
                        )}
                    </Card>
                    <Card body className="shadow mb-4 p-3">
                        {this.props.application.length > 0 && (
                            <RenderApplications
                                columns={ReactTableColumns}
                                application={this.props.application}
                                ExpandedComponent={this.ExpandedComponent}
                                handleSelectedRows={this.handleSelectedRows}
                                currentJob={currentJob}
                                fields={fields}
                            />
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
        application: state.application,
        currentJob: state.jobs.find((job) => job.jobId === parseInt(jobId)),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            loadJobs: bindActionCreators(jobActions.loadJobs, dispatch),
            loadJobById: bindActionCreators(jobActions.loadJobById, dispatch),
            loadApplicationsByJobId: bindActionCreators(
                applicationActions.loadApplicationsByJobId,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageApplications);
