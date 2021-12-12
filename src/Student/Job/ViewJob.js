import React from "react";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

class ViewJob extends React.Component {
    state = {
        jobList: {},
    };

    render() {
        return (
            <Row>
                <div>
                    <h5 className="mb-4">Job Openings</h5>
                    <Accordion defaultActiveKey="0" className="mb-4 shadow">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5>Cerner</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                <div class="text-muted text-end">
                                    2 days ago
                                </div>
                                <hr />
                                <div className="text-end">
                                    <Button variant="danger">
                                        Apply now{" "}
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                </div>
                            </Accordion.Body>
                            {/* <div class="text-muted text-end card-footer">
                                2 days ago
                            </div> */}
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="mb-4 shadow">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5>Google</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                <div class="text-muted text-end">
                                    2 days ago
                                </div>
                                <hr />
                                <div className="text-end">
                                    <Button variant="danger">
                                        Apply now{" "}
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                </div>
                            </Accordion.Body>
                            {/* <div class="text-muted text-end card-footer">
                                2 days ago
                            </div> */}
                        </Accordion.Item>
                    </Accordion>

                    <Accordion defaultActiveKey="0" className="mb-4 shadow">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5>Amazon</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                <div class="text-muted text-end">
                                    2 days ago
                                </div>
                                <hr />
                                <div className="text-end">
                                    <Button variant="danger">
                                        Apply now{" "}
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                </div>
                            </Accordion.Body>
                            {/* <div class="text-muted text-end card-footer">
                                2 days ago
                            </div> */}
                        </Accordion.Item>
                    </Accordion>

                    <Accordion defaultActiveKey="0" className="mb-4 shadow">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5>Uber</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                <div class="text-muted text-end">
                                    2 days ago
                                </div>
                                <hr />
                                <div className="text-end">
                                    <Button variant="danger">
                                        Apply now{" "}
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                </div>
                            </Accordion.Body>
                            {/* <div class="text-muted text-end card-footer">
                                2 days ago
                            </div> */}
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Row>
        );
    }
}

export default ViewJob;
