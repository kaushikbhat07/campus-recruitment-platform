import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Student() {
    return (
        <Row>
            <Card body className="shadow p-3">
                <h5 className="mb-1">Student</h5>
                <span className="m- 0 p-0 text-muted font-size-13px">
                    Click on the below buttons for different operations on{" "}
                    <span className="fw-bold">STUDENT</span>
                </span>
                <hr className="m-0" />

                <div id="authentication">
                    <Row className="mt-5">
                        <h6>Authentication</h6>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Link
                                className="btn btn-success me-1"
                                to="student/login"
                            >
                                Student Login
                            </Link>
                            <Link className="btn btn-success me-1" to="/logout">
                                Logout
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div id="jobs">
                    <Row className="mt-5">
                        <h6>Jobs and Applications</h6>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Link
                                className="btn btn-success me-1"
                                to="student/job"
                            >
                                View Jobs
                            </Link>
                            <Link
                                className="btn btn-success me-1"
                                to="student/profile"
                            >
                                Modify Profile
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Row>
    );
}

export default Student;
