import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container, Card, Col, Row, Image, Button } from 'react-bootstrap';
import JSONDATA from './components/MOCK_DATA.json';

function UsersID() {
    let { userName } = useParams();
    let user = JSONDATA.find(val => val.last_name === userName);
    return (
        <>
            <Container fluid style={{
                marginBottom: "2rem",
                fontFamily: "Orelega One",
            }}>

                <NavLink to="/users">
                    <Button variant="dark" style={{
                        margin: "0.2rem 0 0.2rem",
                        float: "right",
                        fontFamily: "Orelega One"
                    }}>BACK
                    </Button>
                </NavLink>

                <Container style={{
                    marginTop: "1rem",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    border: "0.2rem solid rgba(52, 58, 64, 1)"
                }}>
                   в
                </Container>
            </Container>
        </>
    );
}

export default UsersID;