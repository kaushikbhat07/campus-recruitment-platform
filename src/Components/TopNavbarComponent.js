import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./TopNavbarComponent.css";

function TopNavbarComponent() {
    return (
        <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            id="top-navbar"
            className="shadow"
        >
            <Container>
                <Navbar.Brand href="#home">Campus Hire</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/login"
                        >
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Link>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/register"
                        >
                            <Nav.Link href="#register">Register</Nav.Link>
                        </Link>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/admin"
                        >
                            <Nav.Link href="#admin">Admin</Nav.Link>
                        </Link>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/about"
                        >
                            <Nav.Link href="#student">Student</Nav.Link>
                        </Link>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/logout"
                        >
                            <Nav.Link href="#student">Logout</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbarComponent;
