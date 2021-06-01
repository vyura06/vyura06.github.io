import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Jumbotron from './components/Jumbotron'

import yura from './img/Yura.jpg';


export const Home = () => (
    <>
        <Jumbotron></Jumbotron>
        <Container fluid style={{ marginTop: '1rem', fontFamily: "Orelega One" }}>
            <Container>
                    <div class="col-sm" style={{ marginBottom: "1rem" }}>
                        <Card style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            border: "0.2rem solid rgba(52, 58, 64, 1)",
                            backgroundColor: "transparent",
                        }}>
                            <Card.Img src={yura} style={{ width: '12rem', height: "12rem", border: "0.2rem solid rgba(52, 58, 64, 1)", borderRadius: "50%", marginTop: "1rem" }} ></Card.Img>
                            <Card.Body style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                <Card.Title style={{ textAlign: "center", fontSize: "1.6rem", justifyContent: "center", display: "flex" }}>Yura Vechorko</Card.Title>

                                <Card.Text style={{ maxWidth: "20rem" }}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>

                                <ul style={{ display: "flex", listStyle: "none", padding: "0", }}>
                                    <li><a href="https://github.com/vyura06"><svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg></a></li>
                                    <li><a href="https://vk.com/niga_nuga"><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" /></svg></a></li>
                                    <li><a href="https://t.me/nnuga"><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" /></svg></a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
            </Container>
        </Container>
        <Row>
                        <div class="col-sm" style={{ fontFamily: "Orelega One" }}>
                            <Timeline lineColor={'#343a40'}>
                                <TimelineItem
                                    key="001"
                                    dateText="Name&Year of birth"
                                    dateInnerStyle={{ background: '#343a40', color: 'white' }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "bold" }}></div>
                                    <div style={{ fontSize: "2rem", fontWeight: "bold" }}></div>
                                </TimelineItem>
                                <TimelineItem
                                    key="002"
                                
                                    dateInnerStyle={{ background: 'white ', color: '#343a40' }}
                                    bodyContainerStyle={{
                                        background: '#ddd',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <h3 style={{ color: '#343a40' }}></h3>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                    <p>
                                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    </p>
                                </TimelineItem>
                                <TimelineItem
                                    key="003"
                                    dateInnerStyle={{ backgroundColor: '#343a40', color: 'white' }}>

                                    <h3></h3>
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
                                    dateInnerStyle={{ background: 'white ', color: '#343a40' }}
                                >
                                    <h3></h3>
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
                                    dateInnerStyle={{ backgroundColor: '#343a40', color: 'white' }}
                                    bodyContainerStyle={{
                                        background: '#ddd',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <h3 style={{ color: '#343a40' }}></h3>
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
                                    dateInnerStyle={{ backgroundColor: 'white ', color: '#343a40' }}
                                >
                                    <h3></h3>
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
        <Jumbotron></Jumbotron>
            <Container fluid style={{ marginBottom: "2rem", marginTop: "3rem", fontFamily: "Orelega One" }}>
                <Row>
                    <Container fluid>
                        <Container>
                            <Col style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    width: "100%",
                                    height: "100%",
                                    border: "0.2rem solid rgba(52, 58, 64, 1)",
                                    backgroundColor: "transparent",
                                }}>
                                <Card.Text style={{ maxWidth: "20rem", marginTop:"2rem" }}>
                                    <h1>About the project:</h1>
                                    <div style={{ fontSize: "1.5rem", textAlign: "center", marginBottom:"2rem" }}>
                                        This project is a study assignment for second year students. It aims to popularize Belarusian directors among young people. Tell about the first Belarusian film, eminent representatives of Belarusian direction, show how interesting and exciting cinema can be.
                                    </div>
                                </Card.Text>
                            </Col>
                        </Container>
                    </Container>
                </Row>
            </Container>
    </>
)