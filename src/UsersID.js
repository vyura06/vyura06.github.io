import React from 'react';
import { useParams } from "react-router-dom";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container, Card, Col, Row, Image, Button } from 'react-bootstrap';
import JSONDATA from './components/MOCK_DATA.json';

import Azaryonok from './img/Azaryonok.jpg';
import Arlanov from './img/Arlanov.jpg';
import Belousov from './img/Belousov.jpg';
import Bychkov from './img/Bychkov.jpg';
import Veinerovich from './img/Veinerovich.jpg';
import Volchek from './img/Volchek.jpg';
import Haiduk from './img/Haiduk.jpg';
import Dashuk from './img/Dashuk.jpg';
import Elkhov from './img/Elkhov.jpg';


function UsersID() {
    let images = [Azaryonok, Arlanov, Belousov, Bychkov, Veinerovich, Volchek, Haiduk, Dashuk, Elkhov];
    let { userName } = useParams();
    let user = JSONDATA.find(val => val.last_name === userName);
    let img = images.find(val => val.includes(userName));
    return (
        <>
            <Container fluid style={{
                marginBottom: "2rem",
                fontFamily: "Orelega One",
            }}>

                <Button href="/users" variant="dark" style={{
                    margin: "0.2rem 0 0.2rem",
                    float: "right",
                    fontFamily: "Orelega One"
                }}>BACK
                </Button>

                <Container style={{
                    marginTop: "1rem",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    border: "0.2rem solid rgba(52, 58, 64, 1)"
                }}>
                    <Row>
                        <div class="col-sm" style={{ justifyContent: "center", display: "flex", marginTop: "1rem" }}>
                            <Card.Img src={img} class="img-fluid" alt="Responsive image" style={{ width: '20rem', height: "20rem", border: "0.2rem solid rgba(52, 58, 64, 1)", borderRadius: "50%", marginTop: "1rem" }} ></Card.Img>
                        </div>
                    </Row>
                    <Row>
                        <div class="col-sm" style={{ fontFamily: "Orelega One" }}>
                            <Timeline lineColor={'#343a40'}>
                                <TimelineItem
                                    key="001"
                                    dateText="Name&Year of birth"
                                    dateInnerStyle={{ background: '#343a40', color: 'white' }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "bold" }}>{user.first_name} {user.last_name}</div>
                                    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{user.year_of_birth}</div>
                                </TimelineItem>
                                <TimelineItem
                                    key="002"
                                    dateText={user.year1}
                                    dateInnerStyle={{ background: 'white ', color: '#343a40' }}
                                    bodyContainerStyle={{
                                        background: '#ddd',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <h3 style={{ color: '#343a40' }}>{user.txt1}</h3>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                                <TimelineItem
                                    key="003"
                                    dateText={user.year2}
                                    dateInnerStyle={{ backgroundColor: '#343a40', color: 'white' }}>

                                    <h3>{user.txt2}</h3>
                                    <h4>Subtitle</h4>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                                <TimelineItem
                                    key="004"
                                    dateText={user.year3}
                                    dateInnerStyle={{ background: 'white ', color: '#343a40' }}
                                >
                                    <h3>{user.txt3}</h3>
                                    <h4>Subtitle</h4>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                                <TimelineItem
                                    key="005"
                                    dateText={user.year4}
                                    dateInnerStyle={{ backgroundColor: '#343a40', color: 'white' }}
                                    bodyContainerStyle={{
                                        background: '#ddd',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <h3 style={{ color: '#343a40' }}>{user.txt4}</h3>
                                    <h4 style={{ color: '#343a40' }}>Subtitle</h4>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                                <TimelineItem
                                    key="006"
                                    dateText={user.year5}
                                    dateInnerStyle={{ backgroundColor: 'white ', color: '#343a40' }}
                                >
                                    <h3>{user.txt5}</h3>
                                    <h4>Subtitle</h4>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </Row>

                    <Row>
                        <Container>
                                <Col>
                                    <div class="col-sm">
                                        <div style={{ fontSize: "2rem", justifyContent: "center", display: "flex", fontWeight:"bold", marginTop: "3rem", }}>
                                            <p>Photo with him:</p>
                                        </div>
                                    </div>
                                </Col>
                        </Container>
                        <Container fluid>
                            <div class="col-sm" style={{
                                marginTop: "1rem",
                                marginBottom: "2rem",
                                justifyContent: "center",
                                display: "flex",
                            }}>
                                <Image src={user.photo} width="350" height="500" style={{border: "0.2rem solid rgba(52, 58, 64, 1)",
                                padding: "0.2rem"}}></Image>
                                                    
                            </div>
                        </Container>    
                        
                    </Row>

                    <Row>
                        <Container>
                                <Col>
                                    <div class="col-sm">
                                        <div style={{ fontSize: "2rem", justifyContent: "center", display: "flex", fontWeight:"bold", marginTop: "3rem", }}>
                                            <p>Video about him:</p>
                                        </div>
                                    </div>
                                </Col>
                        </Container>
                        <Container fluid>
                            <div class="col-sm" style={{
                                marginTop: "1rem",
                                marginBottom: "2rem",
                                justifyContent: "center",
                                display: "flex",
                            }}>
                                <iframe width="800" height="615" src={user.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{border: "0.2rem solid rgba(52, 58, 64, 1)",
                                                    padding: "0.2rem"}}></iframe>
                            </div>
                        </Container>
                    </Row>

                    <Row>
                        <Container fluid>
                            <Container>
                                <Col>
                                    <div class="col-sm">
                                        <div style={{ fontSize: "2rem", justifyContent: "center", display: "flex", fontWeight:"bold" }}>
                                            <p>Native City:</p>
                                        </div>
                                    </div>
                                </Col>
                            </Container>
                            <Col>
                                <Container fluid>
                                    <div class="col-sm" style={{
                                        marginTop: "1rem",
                                        marginBottom: "3rem",
                                        justifyContent: "center",
                                        display: "flex",
                                        overflow: "hidden",
                                    }}>
                                        <div class="map-responsive">
                                            <iframe src={user.home}
                                                width="800" height="415" frameborder="0" 
                                                style={{ 
                                                    border: 0,
                                                    border: "0.2rem solid rgba(52, 58, 64, 1)",
                                                    padding: "0.2rem"
                                                }} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    
                                </Container>
                            </Col>
                        </Container>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default UsersID;