import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Admin() {
    return (
        <Row>
            <Card body className="shadow p-3">
                <h5 className="mb-1">Admin</h5>
                <span className="m- 0 p-0 text-muted font-size-13px">
                    Click on the below buttons for different operations on{" "}
                    <span className="fw-bold">ADMIN</span>
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
                                to="admin/register"
                            >
                                Admin Register
                            </Link>
                            <Link
                                className="btn btn-success me-1"
                                to="admin/login"
                            >
                                Admin Login
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
                                to="admin/job/create"
                            >
                                Create Jobs
                            </Link>
                            <Link
                                className="btn btn-success me-1"
                                to="admin/job/manage"
                            >
                                Manage Jobs
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div id="student">
                    <Row className="mt-5">
                        <h6>Students</h6>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Link
                                className="btn btn-success me-1"
                                to="student/create/"
                            >
                                Add Student
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Row>
    );
}

export default Admin;
