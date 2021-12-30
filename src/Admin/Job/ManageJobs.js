import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ManageJobs = ({ jobs, onClickDeleteJob }) => {
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
                            <p>CTC: {job.ctc}</p>
                            <p>Eligibility: {job.eligibility}</p>
                            <p>Offer type: {job.offerType}</p>
                            <p>Job description: {job.jobDesc}</p>
                        </div>
                        <div className="text-muted text-end">2 days ago</div>
                        <hr />
                        <div className="text-end">
                            <Link to={`/admin/job/modify/${job.jobId}`}>
                                <Button variant="primary" className="me-3">
                                    Modify{" "}
                                    <i className="bi bi-pencil-square"></i>
                                </Button>
                            </Link>

                            <Button
                                variant="danger"
                                onClick={() => onClickDeleteJob(job.jobId)}
                            >
                                Delete <i className="bi bi-trash"></i>
                            </Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        ))
    );
};

export default ManageJobs;
