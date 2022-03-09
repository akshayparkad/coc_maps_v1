import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'

const Footer = () => {
    return (
            <footer>
                <Container fluid className='mt-10'>
                    <Row>
                        <Col className='text-center py-3 footer-text'>
                        Copyright &copy; New CoC Bases
                        </Col>
                        <div className='footer-text-policy'>
                        This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see Supercell’s Fan Content Policy- <a className='link' href="https://www.supercell.com/fan-content-policy" target= "_blank" rel="noreferrer">www.supercell.com/fan-content-policy</a>
                        </div>
                    </Row>
                </Container>
                
                </footer>
    )
}

export default Footer