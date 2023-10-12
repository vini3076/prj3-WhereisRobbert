import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav, Container, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    
    <>
      {/* <h1> Hello there</h1>
      <div>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Signup</Link>
      </div> */}
      

      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Camp Grounds Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <Nav className='ml-auto d-flex'>
              <Nav.Link as={Link} to='/'>
                Search For Books
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Locations
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )} 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
