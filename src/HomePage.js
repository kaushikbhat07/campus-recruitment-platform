import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

function HomePage() {
    return (
        <Row>
            <div className="py-5">
                <h1 className="display-5 fw-bold">
                    Welcome to{" "}
                    <span className="text-success">Campus Hire!</span>
                </h1>
                <div className="col-md-8">
                    <p className="fs-4">
                        The one stop platform for colleges to conduct campus
                        placements.
                    </p>
                    <p className="fs-5">
                        Create job openings for companies that arrive with
                        opportunities, and gather student information for each
                        job opening, and provide it to the companies.
                    </p>
                    <p className="fs-6">
                        <span className="fw-bold">Admin Features:</span>
                        <ul>
                            <li>Create job opening</li>
                            <li>Modify existing jobs</li>
                            <li>Delete jobs</li>
                            <li>View Applications for each Job</li>
                            <li>Export Applications as .csv file</li>
                            <li>Register new admins</li>
                            <li>Add Student</li>
                            <li>Login/Logout</li>
                        </ul>
                        <span className="fw-bold">Student Features:</span>
                        <ul>
                            <li>View job opening</li>
                            <li>Apply for each job</li>
                            <li>Update their profile</li>
                            <li>OTP based login with mobile number</li>
                            <li>Logout</li>
                        </ul>
                    </p>
                </div>

                <Alert variant="success">
                    Access the below two interfaces of the application Admin and
                    Student to perform various operations.
                </Alert>
                <Link
                    to="/admin"
                    className="btn btn-primary btn-lg me-2"
                    type="button"
                >
                    Admin
                </Link>
                <Link
                    to="/student"
                    className="btn btn-primary btn-lg"
                    type="button"
                >
                    Student
                </Link>
            </div>
        </Row>
    );
}

export default HomePage;
