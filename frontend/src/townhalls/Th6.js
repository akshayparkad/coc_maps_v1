import React, { useState } from 'react'
import { Row, Col, Card, Container, Button, Modal, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Helmet } from 'react-helmet'


export const Th6 = () => {
    const baseList = useSelector(state => state.baseList)
    const { error, loading, bases } = baseList
    const [term, setTerm] = useState("")

    const [modalData, setModalData] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='my-0.5 p-3'>

            <Helmet>
                <title>TH 6 Bases | Latest CoC Clash Bases</title>
                <meta name="description" content="Get new th6 war bases, farm bases and trophy bases" />
                <meta name="keywords" content="th6 war base, best th6 war base, coc th6 bases" />
            </Helmet>

            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Container className="my-1 p-3">
                        <Button className='btn btn-danger m-1 mb-4' onClick={() => setTerm('War Base')}>War Base</Button>
                        <Button className='btn btn-success m-1 mb-4' onClick={() => setTerm('Farm Base')}>Farm Base</Button>
                        <Button className='btn btn-warning m-1 mb-4' onClick={() => setTerm('Trophy Base')}>Trophy Base</Button>

                        <Row xs={1} md={4} className="g-4">
                            {bases.filter((base) => {
                                if (base.townhall_level === '6' && term === "") {
                                    return base
                                } else if (base.townhall_level === '6' && term === base.category_name) {
                                    return base
                                }
                            }).map(base => (
                                <Col key={base.id}>
                                    <Card >
                                        <Card.Img variant="top" style={{ height: '12rem' }} src={base.image} onClick={() => {
                                            setModalData(base);
                                            handleShow()
                                        }} />

                                        <Modal show={show} onHide={handleClose} size="xl">
                                            <Modal.Header closeButton>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Image src={modalData.image} style={{ height: '100%', width: '100%' }} />
                                            </Modal.Body>

                                        </Modal>

                                        <Card.Body>
                                            <Card.Text>Submitted By: {base.name}</Card.Text>
                                            <Card.Text>TownHall Level: {base.townhall_level}</Card.Text>
                                            <Card.Text>Base Type: {base.category_name}</Card.Text>

                                            <Button href={base.url} variant="success" >Copy Layout</Button>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                        </Row>
                    </Container>

            }


        </Container>
    )
}
