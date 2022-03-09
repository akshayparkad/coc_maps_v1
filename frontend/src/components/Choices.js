import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Choices = () => {
  return (
    <Container className='my-0.5 p-3'>
    <Nav variant="pills">
      <Nav.Item>
      <LinkContainer to="/">
        <Nav.Link Link to="/home">War Base</Nav.Link>
        </LinkContainer>
      </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/th11-base">
          <Nav.Link>Trophy Base</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      
        <Nav.Item>
        <LinkContainer to="/th12-base">
          <Nav.Link>Farm Base</Nav.Link>
          </LinkContainer>
        </Nav.Item>

    </Nav>

  </Container>
  )
}
