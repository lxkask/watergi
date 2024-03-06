import React from "react";
import './footer.css'
import Container from 'react-bootstrap/Container';
import icon from '../img/instagram-logo.svg'

const footer = () => {
    return (
        <div>
            <Container fluid className="min-vw-100 d-flex flex-column align-items-center bg-purple p-4">
                <div id="icon-background"><a href="https://instagram.com/watergihydration" target="_blank"><img src={icon}/></a></div>
                <h5 className="pt-3 pb-2 fs-6 text-white">watergi@watergi.com</h5>
                <h5 className="text-white">© 2024 WATERGI all rights reserved</h5>
            </Container>
        </div>
    )
};

export default footer