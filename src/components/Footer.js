import React from 'react';
import {Container} from 'react-bootstrap';

const Footer = () => (
        <Container fluid style={{backgroundColor: '#343a40', color: '#adb1b8'}}>
            <Container style={{display: 'flex', justifyContent: 'center', padding: '8px'}}>
                <p>Filmmakers of Belarus</p>
            </Container>
        </Container>
)

export default Footer;