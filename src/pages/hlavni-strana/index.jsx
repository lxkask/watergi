import React from 'react';
import './index.css'
import placeholder from '../../img/placeholder.mp4';
import stanice1 from '../../img/stanice1.png'
import stanice2 from '../../img/stanice2.png';
import beach2 from '../../img/beach2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HlavniStrana = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className='min-vw-100 m-0 p-0'>
            <div class="min-vw-100 h-[80vh] relative d-flex flex-column align-items-center justify-center">
              <video muted autoPlay loop playsInline disablePictureInPicture className="w-100 h-100 absolute object-fit-cover">
                <source src={placeholder} type='video/mp4' />
              </video>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <h1 id='big-heading' className='display-4  font-bold text-purple text-center z-10'>PŘEDSTAVUJEME JEDNODUCHOU INOVACI <br />WATERGI HYDRATAČNÍ STANICI</h1>
              <p id='smaller-heading' className='display-6 fw-medium text-purple text-center mt-4 z-10  '>EKOLOGICKÝ PITNÝ REŽIM S FILTROVANOU VODOU BEZ OBALU</p>
            </div>
          </Col>
        </Row>
        <Row className='d-flex flex-md-row flex-column '>
          <Col md={6} className='bg-cover bg-left d-flex justify-content-center align-items-end min-vh-100' style={{ backgroundImage: `url(${stanice1})` }}>
            <h2 className='text-white font-bold text-5xl pb-10'>NAŠE STANICE</h2>
          </Col>
          <Col md={6} className='bg-cover bg-left d-flex justify-content-center align-items-end min-vh-100' style={{ backgroundImage: `url(${stanice2})` }}>
            <h2 className='text-white font-bold text-5xl pb-10'>NAŠE PRODUKTY</h2>
          </Col> 
        </Row>
        <Row>
          <Col md={12} className='flex bg-darkPurple flex-col justify-center items-center h-auto text-center pb-3'>
            <h2 className='text-white font-bold fs-2 pt-5 mb-6'>JAKOU MÁŠ MOŽNOST VOLBY, KDYŽ JSI V TERÉNU A MÁŠ ŽÍZEŇ?</h2>
            <p className='text-white text-3xl mb-6'>Jdeš a koupíš si balenou vodu v jednorázovém obalu?</p>
            <h2 className='text-green font-bold text-4xl'>WATERGI MĚNÍ HRU, <br/>PŘINÁŠÍME NOVOU VOLBU</h2>
          </Col>
        </Row>
        <Row className='p-0 text-center d-flex flex-md-row flex-column justify-content-center text-white fs-2 font-bold'>
          <Col md={3} className='bg-green p-5'>
            <h2>TOČENÁ <br />FILTROVANÁ <br />VODA <br />DO VLASTNÍ <br />LÁHVE</h2>
          </Col>
          <Col md={3} className='bg-purple p-5'>
            <h2>NOVÁ CESTA <br />HYDRATACE, <br />KDYŽ JSI V <br />TERÉNU A MÁŠ <br />ŽÍZEŇ</h2>
          </Col>
          <Col md={3} className='bg-pink p-5'>
            <h2>EKOLOGICKÝ <br />PITNÝ REŽIM <br />BEZ ZÁTĚŽE <br />ŽIVOTNÍHO <br />PROSTŘEDÍ</h2>
          </Col>
          <Col md={3} className='bg-green p-5'>
          <h2>PERLIVÁ <br />NEPERLIVÁ <br />CHLAZENÁ <br />NECHLAZENÁ <br />PRÉMIOVÁ CHUŤ</h2>
          </Col>
          <Col className='flex bg-cover w-screen h-96 items-center justify-center text-center text-white pt-20' style={{ backgroundImage: `url(${beach2})` }}>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-5xl '>JEDNORÁZOVÉ PLASTY <br />NEJSOU BUDOUCNOST</h2>
              <button className='bg-button text-white font-bold text-2xl mt-20 py-2 px-2 rounded-full w-72'>PŘIDEJ SE K NÁM</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default HlavniStrana;