import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const RegisterForm = ({ form, handleSubmit, handleFormChange }) => (
    <Form noValidate validated={form.validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    onChange={handleFormChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Email address.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleFormChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit" variant="success">
            Register
        </Button>
    </Form>
);

export default RegisterForm;
