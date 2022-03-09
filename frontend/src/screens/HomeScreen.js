import React, { useState } from 'react'
import { Row, Col, Card, Container, Button, Image, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import '../paginate.css'
// import Modal from 'react-modal'


export const HomeScreen = () => {

  const baseList = useSelector(state => state.baseList)
  const { error, loading, bases } = baseList

  const [modalData, setModalData] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [pageNumberLimit, setpageNumberLimit] = useState(12);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(12);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);



  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const pages = [];
  for (let i = 1; i <= Math.ceil(bases.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexofFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = bases.slice(indexofFirstItem, indexOfLastItem)


  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  })

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }


  return (
    <Container className='my-0.5 p-3'>
      {loading ? <Loader />
        : error ? <Message variant='danger'>{error}</Message>
          :

          <Container className="my-1 p-3">
            <Row xs={1} md={4} className="g-4">
              {currentItems.map(base => (
                <Col key={base.id}>
                  <Card>

                    <Card.Img variant="top" style={{ height: '12rem' }} src={base.image}
                      onClick={() => {
                        setModalData(base);
                        {handleShow()}
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

      <ul className='pageNumbers'>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>


    </Container>
  )
}
