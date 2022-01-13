import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const CreateJobForm = ({
    form,
    handleSubmit,
    handleFormChange,
    job,
    source,
}) => (
    <Form noValidate validated={form.validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    onChange={handleFormChange}
                    defaultValue={job.company}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Company Name.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>CTC</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="CTC"
                    name="ctc"
                    onChange={handleFormChange}
                    defaultValue={job.ctc}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid CTC.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Eligibility</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Eligibility"
                    name="eligibility"
                    onChange={handleFormChange}
                    defaultValue={job.eligibility}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a Eligibility.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Job Description"
                    name="jobDesc"
                    onChange={handleFormChange}
                    defaultValue={job.jobDesc}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Job Description.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Offer Type</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Offer Type"
                    name="offerType"
                    onChange={handleFormChange}
                    defaultValue={job.offerType}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Offer Type.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit">
            {source !== null && source && source === "modify"
                ? "Modify Job"
                : "Create Job"}
        </Button>
    </Form>
);

export default CreateJobForm;
