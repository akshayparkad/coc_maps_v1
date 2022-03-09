import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'


export const Title = () => {
    return (
        <Container className='p-3'>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <Button variant='btn btn-primary btn-lg rounded'> Pick TownHall Level </Button>
                </Col>
                </Row>
        </Container>

    )
}
