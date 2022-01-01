import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./StudentProfile.css";

const StudentProfile = ({ student, form, handleSubmit, handleFormChange }) => (
    <Form noValidate validated={form.validated} onSubmit={handleSubmit}>
        <Card className="mb-4 p-3 shadow">
            <Card.Body>
                <h6>About</h6>
                <hr />
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom10">
                            <Form.Label>Register Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="regNumber"
                                placeholder="Register Number"
                                onChange={handleFormChange}
                                defaultValue={student.regNumber}
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
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleFormChange}
                                defaultValue={student.firstName}
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
                        <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleFormChange}
                                defaultValue={student.lastName}
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
                        <Form.Group as={Col} controlId="validationCustom03">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                onChange={handleFormChange}
                                defaultValue={student.dob}
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
                        <Form.Group as={Col} controlId="validationCustom04">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="gender"
                                placeholder="Gender"
                                onChange={handleFormChange}
                                defaultValue={student.gender}
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
                        <Form.Group as={Col} controlId="validationCustom05">
                            <Form.Label>Adhar Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="adharNumber"
                                placeholder="Adhar Number"
                                onChange={handleFormChange}
                                defaultValue={student.adharNumber}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Company Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        <Card className="mb-4 p-3 shadow">
            <Card.Body>
                <h6>Contact Details</h6>
                <hr />
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom06">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="contactNumber"
                                placeholder="Contact Number"
                                onChange={handleFormChange}
                                defaultValue={student.contactNumber}
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
                        <Form.Group as={Col} controlId="validationCustom07">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                name="address"
                                placeholder="Address"
                                onChange={handleFormChange}
                                defaultValue={student.address}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Company Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        <Card className="mb-4 p-3 shadow">
            <Card.Body>
                <h6>Resume</h6>
                <hr />
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom21">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="resume"
                                placeholder="Resume"
                                onChange={handleFormChange}
                                defaultValue={student.resume}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Company Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        <Card className="mb-4 p-3 shadow">
            <Card.Body>
                <h6>Current/Ongoing Course</h6>
                <hr />
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom11">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="branch"
                                placeholder="Branch"
                                onChange={handleFormChange}
                                defaultValue={student.branch}
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
                        <Form.Group as={Col} controlId="validationCustom12">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="semester"
                                placeholder="Semester"
                                onChange={handleFormChange}
                                defaultValue={student.semester}
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
                        <Form.Group as={Col} controlId="validationCustom12">
                            <Form.Label>Section</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="section"
                                placeholder="Section"
                                onChange={handleFormChange}
                                defaultValue={student.section}
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
                        <Form.Group as={Col} controlId="validationCustom13">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="specialization"
                                placeholder="Specialization"
                                onChange={handleFormChange}
                                defaultValue={student.specialization}
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
                        <Form.Group as={Col} controlId="validationCustom15">
                            <Form.Label>Start year</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                name="startYear"
                                placeholder="Start year"
                                onChange={handleFormChange}
                                defaultValue={student.startYear}
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
                        <Form.Group as={Col} controlId="validationCustom16">
                            <Form.Label>End Year</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                name="endYear"
                                placeholder="End Year"
                                onChange={handleFormChange}
                                defaultValue={student.endYear}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Company Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        <Card className="mb-4 p-3 shadow">
            <Card.Body>
                <h6>Previous Education</h6>
                <hr />
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom14">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="education"
                                placeholder="Education"
                                onChange={handleFormChange}
                                defaultValue={student.education}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Company Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        <Button type="submit" variant="success">
            Update Profile
        </Button>
    </Form>
);

export default StudentProfile;
