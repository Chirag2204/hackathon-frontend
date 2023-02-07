import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Route } from 'react-router-dom'

//import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapeOnSelect>
        <Container>

         
            <Navbar.Brand className="brandName">Hackathon</Navbar.Brand>

          


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="xyz" >
            <Nav className='align-center'>
              <>
                  
                    <Nav.Link ><i class="fas fa-sign-in-alt"></i>Login</Nav.Link>
                  
                 
                    <Nav.Link to="/register"><i className="fas fa-user"></i>Register</Nav.Link>
                  
                </>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Header;
