import React from 'react';
import './naviBar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import logo from '../img/watergi-logo.png'

const NaviBar = () => {
  return (
    // <nav className="bg-white h-16 flex items-center justify-between px-8">
    //   <div className="flex items-center">
    //     <Link to="/">
    //       <img src="/path/to/logo.png" alt="Logo" className="h-10"/> {/* Přidejte cestu k logu */}
    //     </Link>
    //     <ul className="flex space-x-4 ml-8">
    //       <li>
    //         <Link className="text-a984f0 hover:text-724aeb transition-colors duration-300" to="/co-delame">Co děláme</Link>
    //       </li>
    //       <li>
    //           <Link className="text-a984f0 hover:text-724aeb transition-colors duration-300" to="/kde-je-problem">Kde je problém</Link>
    //       </li>
    //       <li>
    //           <Link className="text-a984f0 hover:text-724aeb transition-colors duration-300" to="/nase-reseni">Naše řešení</Link>
    //       </li>
    //       <li>
    //         <Link className="text-a984f0 hover:text-724aeb transition-colors duration-300" to="/pridej-se-k-nam">Přidej se k nám</Link>
    //       </li>
    //       <li>
    //         <Link className="text-a984f0 hover:text-724aeb transition-colors duration-300" to="/kontakt">Kontakt</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <button className="bg-7047eb text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white hover:text-7047eb">
    //     Přidej se k nám
    //   </button>
    // </nav>
    <nav>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <Link className='' to="/">
                <img src={logo} alt="Logo" className="h-12"/>
              </Link>
            </Navbar.Brand>
            <Button as='a' className='rounded-5 ms-auto me-1 d-lg-none join-btn'>PŘIDEJTE SE K NÁM</Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-lg-4 gap-1 navbar-text">
                <Link className="ms-0 ms-lg-3" to="/co-delame">Co děláme</Link>
                <p className='d-lg-block d-none dot'>•</p>
                <Link className="" to="/kde-je-problem">Kde je problém</Link>
                <p className='d-lg-block d-none dot'>•</p>
                <Link className="" to="/nase-reseni">Naše řešení</Link>
                <p className='d-lg-block d-none dot'>•</p>
                <Link className="" to="/kontakt">Kontakt</Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Text className='d-none d-lg-block'>
                <a className='rounded-5 p-2 join-btn'><span className='button-text'>PŘIDEJTE SE K NÁM</span></a>
            </Navbar.Text>
          </Container>
      </Navbar>
    </nav>
  );
};

export default NaviBar;