import React from 'react';
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HlavniStrana = () => {
  return (
    <div>
       <Container fluid="md">
        <Row id='big-main-text' className=''>
          <Col className='d-flex align-items-center flex-column p-5'>
            <h1 className=''>PŘEDSTAVUJEME JEDNODUCHOU INOVACI WATERGI HYDRATAČNÍ STANICI</h1>
            <h2>EKOLOGICKÝ PITNÝ REŽIM S FILTROVANOU VODOU BEZ OBALU</h2>
          </Col>
        </Row>
        <Row id='text-product'>
          <Col>
            <h1></h1>
          </Col>
          <Col>
          
          </Col>
        </Row>
        <Row id='big-text-bottom'>
          <Col>
          </Col>
        </Row>
        <Row id='text-boxes'>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row id='text-with-background'>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HlavniStrana;