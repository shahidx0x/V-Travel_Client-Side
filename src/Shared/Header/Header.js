import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, signInGoogle, logout } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const history = useHistory();
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span>VT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/packages">
                Packages
              </Nav.Link>
              {user.email ? (
                <>
                  <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/myorder">
                      My Order
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageall">
                      Manage All Order
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addservice">
                      Add a New Service
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.reload();
                    }}
                    variant="outline-secondary "
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-warning"
                    onClick={() => history.push("/login")}
                  >
                    Login/Register
                  </Button>
                  <Offcanvas
                    style={{ backgroundColor: "#315048" }}
                    show={show}
                    onHide={handleClose}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className="text-white ms-5">
                        Please Login
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Button
                        onClick={signInGoogle}
                        className="ms-5"
                        variant="outline-warning"
                      >
                        login or Register with Google
                      </Button>
                    </Offcanvas.Body>
                  </Offcanvas>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
