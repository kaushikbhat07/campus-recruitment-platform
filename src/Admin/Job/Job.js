import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import * as jobActions from "../../Redux/Actions/JobActions";
import { bindActionCreators } from "redux";

class Job extends React.Component {
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

            // this.props.dispatch(jobActions.createJob(this.state.newJob));
            this.props.actions.createJob(this.state.newJob);

            // fetch("http://localhost:8085/job/new/multiple", {
            //     method: "POST",
            //     body: JSON.stringify(newJobsList),
            //     headers: {
            //         "Content-type": "application/json",
            //         Accept: "*/*",
            //         Connection: "keep-alive",
            //     },
            // })
            //     .then((response) => {
            //         console.log(response.status);
            //         return response.json();
            //     })
            //     .then(
            //         (result) => {
            //             console.log(result);
            //         },
            //         (error) => {
            //             console.log(error);
            //         }
            //     );
        }
    };

    render() {
        const form = this.state.form;

        return (
            <Row>
                <Card body className="shadow">
                    <h5>Create Job Opening</h5>
                    <hr />
                    <Form
                        noValidate
                        validated={form.validated}
                        onSubmit={this.handleSubmit}
                    >
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    onChange={this.handleFormChange}
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Company Name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom02"
                            >
                                <Form.Label>CTC</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="CTC"
                                    name="ctc"
                                    onChange={this.handleFormChange}
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid CTC.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom03"
                            >
                                <Form.Label>Eligibility</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Eligibility"
                                    name="eligibility"
                                    onChange={this.handleFormChange}
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Eligibility.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom04"
                            >
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={3}
                                    placeholder="Job Description"
                                    name="jobDesc"
                                    onChange={this.handleFormChange}
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Job Description.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom05"
                            >
                                <Form.Label>Offer Type</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Offer Type"
                                    name="offerType"
                                    onChange={this.handleFormChange}
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Offer Type.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit">Create Job</Button>
                    </Form>
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
        actions: bindActionCreators(jobActions, dispatch),
        // createJob: (job) => dispatch(jobActions.createJob(job)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
