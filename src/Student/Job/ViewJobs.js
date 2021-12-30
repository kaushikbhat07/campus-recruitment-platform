import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const ViewJobs = ({ jobs }) => {
    return (
        jobs &&
        jobs.map((job) => (
            <Accordion
                defaultActiveKey="0"
                className="mb-4 shadow"
                key={job.jobId}
            >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5>{job.company}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p>ID: {job.jobId}</p>
                            <p>CTC: {job.ctc}</p>
                            <p>Eligibility: {job.eligibility}</p>
                            <p>Offer type: {job.offerType}</p>
                            <p>Job description: {job.jobDesc}</p>
                        </div>
                        <div className="text-muted text-end">2 days ago</div>
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
        ))
    );
};

export default ViewJobs;
