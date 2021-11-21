import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AppBar } from "@mui/material";
import { LinkContainer } from "react-router-bootstrap";



const Navbars = () => {
  return (
    <>
      <AppBar position="fixed">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Nav className="me-auto">
            <LinkContainer exact to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer  exact to="/service">
                        <Nav.Link>Service</Nav.Link>
                    </LinkContainer>
                   
            </Nav>
          </Container>
        </Navbar>
      </AppBar>
    </>
  );
};

export default Navbars;
