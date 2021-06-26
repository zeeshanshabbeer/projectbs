import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BEDMINTON SHOP</Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-end">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-cart-plus"></i>
                &nbsp;Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-sign-in-alt"></i>
                &nbsp;Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                <i className="fas fa-user-plus"></i>
                &nbsp;Registration
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default header;
