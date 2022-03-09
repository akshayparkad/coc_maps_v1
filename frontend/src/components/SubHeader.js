import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const SubHeader = () => {

  return (
    <Container className='my-0.5 p-3'>
    <Nav variant="pills">
      <Nav.Item>
      <LinkContainer to="/">
        <Nav.Link Link to="/home">HOT Bases</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/th6-base">
          <Nav.Link>TownHall 6</Nav.Link>
          </LinkContainer>
        </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/th7-base">
          <Nav.Link>TownHall 7</Nav.Link>
          </LinkContainer>
        </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/th8-base">
          <Nav.Link>TownHall 8</Nav.Link>
          </LinkContainer>
        </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/th9-base">
          <Nav.Link>TownHall 9</Nav.Link>
          </LinkContainer>
        </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/th10-base">
          <Nav.Link>TownHall 10</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/th11-base">
          <Nav.Link>TownHall 11</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      
        <Nav.Item>
        <LinkContainer to="/th12-base">
          <Nav.Link>TownHall 12</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/th13-base">
          <Nav.Link>TownHall 13</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/th14-base">
          <Nav.Link>TownHall 14</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/bh6-base">
          <Nav.Link>BuilderHall 6</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/bh7-base">
          <Nav.Link>BuilderHall 7</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/bh8-base">
          <Nav.Link>BuilderHall 8</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
        <LinkContainer to="/bh9-base">
          <Nav.Link>BuilderHall 9</Nav.Link>
          </LinkContainer>
        </Nav.Item>

     
    </Nav>

  </Container>
  )
}
