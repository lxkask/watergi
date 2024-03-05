import React from 'react';
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ocean from '../../img/ocean.png';
import beach from '../../img/beach.png';
import beach2 from '../../img/beach2-darker.png';

const KdeJeProblem = () => {
  return (
    <div>
      <Container fluid>
        <Row className='d-flex justify-content-center flex-row align-items-center'>
          {/* 1min a flaska dsektop vedle sebe */}
          <Col md="6" className='d-flex align-items-center flex-column justify-content-center bg-purple'>
            <div className="text-center text-white h-screen d-flex flex-column justify-content-center">
              <h2 className="font-bold text-7xl mb-4">1 MINUTA <br /> = <br />1 MILION</h2>
              <p className="text-4xl">
                Každou minutu se celosvětově <br />spotřebuje <br />1 milion jednorázových plastových <br />lahví.
              </p>
            </div>
          </Col>
          {/* !!!nefunguje opacity na bg obrazku nejdřív layout pak tohle dodělat (už mě to sere)*/}
          <Col md="6" id='first-row-l' style={{ backgroundImage: `url(${ocean})`, backgroundSize: "cover"}}>
            <div>
              <h2 className="d-flex flex-column justify-content-center text-white font-bold text-4xl text-center min-vh-100">
                ROK 2050, V <br /> OCEÁNECH BUDE <br /> PLAVAT VÍCE PLASTŮ <br />NEŽ RYB
              </h2>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center flex-row align-items-center'>
          {/* PET v česku a obrazek desktop vedle sebe */}
          <Col md="6" className='d-flex align-items-center flex-column justify-content-center'>
            <div className="min-vw-100 min-vh-100 bg-green text-white p-8 text-center d-flex flex-column justify-content-center">
              <h2 className="font-bold text-7xl mb-4">JEN V ČESKU SE <br /> ROČNĚ VYROBÍ <br />60 TISÍC TUN <br /> PETEK</h2>
              <p className="text-4xl">
                K recyklaci se dostane takřka <br />polovina.
              </p>
          </div>
          </Col>
          <Col md="6" style={{ backgroundImage: `url(${beach})`, backgroundSize: "cover" }}>
            <div className="flex items-center justify-center min-vh-100">
              <h2 className="text-white font-bold text-4xl text-center">
                VĚTŠINU Z <br />PLASTOVÝCH ODPADŮ, <br />TVOŘÍ PRÁVĚ BALENÁ <br />VODA
              </h2>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center flex-row align-items-center'>
          {/* neco zmenit a skladka obrazek desktop vedle sebe */}
          <Col md="6" className='d-flex align-items-center flex-column justify-content-center'>
            <div className="min-vh-100 min-vw-100 bg-purple text-white text-center p-8 d-flex align-items-center flex-column justify-content-center">
              <h2 className="font-bold text-7xl mb-4">JE NA ČASE NĚCO <br />ZMĚNIT</h2>
              <p className="text-4xl">Jednorázové plasty nejsou <br />budoucnost.
              </p>
            </div>
          </Col>
          <Col md="6" style={{ backgroundImage: `url(${beach2})` }}>
            <div className="d-flex items-center justify-center min-vh-100">
              <h2 className="text-white font-bold text-4xl text-center">
                OHROMUJÍCÍCH 91% <br />JEDNORÁZOVÝCH PLASTŮ <br />NEBYLO NIKDY RECYKLOVÁNO, <br />VĚTŠINA Z NICH KONČÍ NA <br />SKLÁDKÁCH NEBO V OCEÁNU
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {/* dopad velkej radek pres celou obrazovku */}
          <Col md="12" className='bg-pink text-white text-center min-vw-100'>
          <div className=''>
            <h2 className="text-4xl font-bold py-10">
              Pokud nezměníme naše kulturní návyky <br />a paradigmata k jednorázovým plastům, <br />dopad bude fatální.
            </h2>
          </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default KdeJeProblem;