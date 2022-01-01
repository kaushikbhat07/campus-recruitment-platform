import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

// import NavDropdown from "react-bootstrap/NavDropdown";

function BottomNavbarComponent() {
    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            id="bottom-navbar"
            className="footer"
        >
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
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
                        </NavDropdown>
                    </Nav> */}
                <Nav>
                    <Link
                        className="nav-link nav-reduce-top-bottom-padding"
                        to="/admin/job/create"
                    >
                        <Nav.Link href="#login">Create Job</Nav.Link>
                    </Link>
                    <Link
                        className="nav-link nav-reduce-top-bottom-padding"
                        to="/admin/job/manage"
                    >
                        <Nav.Link href="#login">Manage Jobs</Nav.Link>
                    </Link>
                    <Link
                        className="nav-link nav-reduce-top-bottom-padding"
                        to="/student/job"
                    >
                        <Nav.Link href="#login">View Job</Nav.Link>
                    </Link>
                    <Link
                        className="nav-link nav-reduce-top-bottom-padding"
                        to="/student/profile/"
                    >
                        <Nav.Link href="#login">View Student Profile</Nav.Link>
                    </Link>
                    <Link
                        className="nav-link nav-reduce-top-bottom-padding"
                        to="/student/create/"
                    >
                        <Nav.Link href="#login">Add Student</Nav.Link>
                    </Link>
                </Nav>
                {/* </Navbar.Collapse>  */}
            </Container>
        </Navbar>
    );
}

export default BottomNavbarComponent;
