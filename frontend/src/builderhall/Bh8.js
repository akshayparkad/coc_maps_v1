import React, { useState } from 'react'
import { Row, Col, Card, Container, Button, Image, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import '../paginate.css'
import { Helmet } from 'react-helmet'
// import Modal from 'react-modal'


export const Bh8 = () => {

  const baseList = useSelector(state => state.baseList)
  const { error, loading, bases } = baseList

  const [modalData, setModalData] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container className='my-0.5 p-3'>
      <Helmet>
        <title>BH 8 bases | Latest CoC Clash Bases</title>
        <meta name="description" content="Get new bh8 bases" />
        <meta name="keywords" content="bh8 war base, best bh8 base, coc bh8 bases" />
      </Helmet>
      {loading ? <Loader />
        : error ? <Message variant='danger'>{error}</Message>
          :

          <Container className="my-1 p-3">
            <Row xs={1} md={4} className="g-4">
            {bases.filter(base => base.townhall_level === '8' && base.category_name === "Builder Hall" ? base : "" ).map(base => (
                                <Col key={base.id}>
                                    <Card className='rounded'>
                                        <Card.Img variant="top" style={{ height: '12rem' }} src={base.image} onClick={() => {
                                            setModalData(base);
                                             handleShow() 
                                        }} />

                    <Modal show={show} onHide={handleClose} size="xl">
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                        <Image src={modalData.image} style={{height : '100%', width : '100%'}}/>
                      </Modal.Body>
                     
                    </Modal>

                    <Card.Body>
                      <Card.Text>Submitted By: {base.name}</Card.Text>
                      <Card.Text>BuilderHall Level: {base.townhall_level}</Card.Text>
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
