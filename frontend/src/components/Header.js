import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'

export const Header = () => {
  return (
  <header>
<Navbar  expand="lg" bg="tansparent" variant="dark" collapseOnSelect="true">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">New CoC Bases</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/about" style={{color: "orange"}}><i className='fas fa-user'></i> About</Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{color: "orange"}}><i className='fa-solid fa-at'></i> Contact</Nav.Link>
        <Nav.Link as={Link} to="/privacy-policy" style={{color: "orange" }}><i className='fas fa-user'></i> Privacy</Nav.Link>
        <Nav.Link as={Link} to="/" style={{color: "orange"}}><i className='fa-brands fa-discord'></i> discord</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 

</header>
  )
}
