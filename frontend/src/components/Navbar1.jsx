import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import brand from "../media/ClubIn.png";
import React from 'react';
import './App.css';



function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={brand} height="60" /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="rt">
                    <Nav >
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link><i class="bi bi-geo-alt-fill"></i></Nav.Link>
                        <Nav.Link><i class="bi bi-bell-fill"></i></Nav.Link>
                        <NavDropdown title={<i class="bi bi-person-circle"></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                {/* <div class="icons" >
                    <i class="bi bi-geo-alt-fill"></i>
                    <i class="bi bi-bell-fill"></i>
                    <i class="bi bi-person-circle"></i>
                </div> */}
            </Container>
        </Navbar>
    );
}

export default NavBar;