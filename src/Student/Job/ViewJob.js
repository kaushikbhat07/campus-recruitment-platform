import React from "react";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";

class ViewJob extends React.Component {
    componentDidMount() {
        this.props.actions
            .loadJobs()
            .catch((error) => alert("error loading jobs"));
    }

    render() {
        const jobs = this.props.jobs;
        console.log("jobs frm view jobs: ", jobs);
        // this.props.jobs &&
        // this.props.jobs.forEach((element) => console.log(element[0]));

        // jobs.forEach((element, index) => {
        //     console.log(element[index].company); // 100, 200, 300
        //     console.log(index); // 0, 1, 2
        //     // console.log(array); // same myArray object 3 times
        // });

        return (
            <Row>
                <div>
                    <h5 className="mb-4">Job Openings</h5>
                    {this.props.jobs &&
                        this.props.jobs.map((job) => {
                            // const displayjob = job;
                            return (
                                <Accordion
                                    defaultActiveKey="0"
                                    className="mb-4 shadow"
                                    key={job.company}
                                >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <h5>{job.company}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                <p>CTC: {job.ctc}</p>
                                                <p>
                                                    Eligibility:{" "}
                                                    {job.eligibility}
                                                </p>
                                                <p>
                                                    Offer type: {job.offerType}
                                                </p>
                                                <p>
                                                    Job description:{" "}
                                                    {job.jobDesc}
                                                </p>
                                            </div>
                                            <div className="text-muted text-end">
                                                2 days ago
                                            </div>
                                            <hr />
                                            <div className="text-end">
                                                <Button variant="danger">
                                                    Apply now{" "}
                                                    <i className="bi bi-pencil-square"></i>
                                                </Button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            );
                        })}
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
        actions: bindActionCreators(jobActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewJob);
