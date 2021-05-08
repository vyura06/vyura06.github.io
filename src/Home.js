import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Jumbotron from './components/Jumbotron'

import fotoap from './img/Fotoap.jpg';
import belousov from './img/Belousov.jpg';
import yura from './img/Yura.jpg';
import zahar from './img/Zahar.jpg';


export const Home = () => (
    <>
        <Jumbotron></Jumbotron>
        <Container fluid style={{ marginBottom: "2rem", marginTop: "3rem", fontFamily: "Orelega One" }}>
            <Row>
                <Container fluid>
                    <Col style={{ justifyContent: "center", display: "flex" }}>
                        <img src={fotoap} class="img-fluid" alt="Responsive image"></img>
                    </Col>

                    <h1 style={{ fontSize: "2rem", marginTop: "1rem", fontWeight: "bold", textAlign: "center" }}>About the project:</h1>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <Col sm={6}>
                            <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                                This project is a study assignment for second year students. It aims to popularize Belarusian directors among young people. Tell about the first Belarusian film, eminent representatives of Belarusian direction, show how interesting and exciting cinema can be.
                            </div>
                        </Col>
                    </div>

                </Container>
            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container fluid style={{ fontFamily: "Orelega One" }}>

            <Row>
                <div class="col-sm" style={{ marginTop: "1rem", marginBottom: "2rem", justifyContent: "center", display: "flex" }}>
                    <Card style={{ width: '30rem', border: "1rem" }}>
                        <Card.Body style={{ backgroundColor: "#343a40", color: "white", fontWeight: "bold" }}><Card.Title>Doer of the day:</Card.Title></Card.Body>
                        <img src={belousov} rounded class="img-fluid" alt="Responsive image" />
                        <Card.Body style={{ backgroundColor: "#343a40", color: "white" }}>
                            <Card.Text>Oleg Belousov</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{ backgroundColor: "#343a40", color: "white" }}>16.11.1945 - 26.03.2009</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div class="col-sm">
                    <div style={{ fontSize: "2rem", fontWeight: "bold", justifyContent: "center", display: "flex" }}>About him:</div>

                    <div style={{ fontSize: "1.5rem", justifyContent: "center", display: "flex" }}>
                        Oleg Pavlovich Belousov (Belarusian Aleg Paulavich Belavusak) - Soviet and Belarusian animator, screenwriter, director.
                        Born on November 16, 1945 in the city of Slutsk, Minsk region. Graduated from BSU (1966). He worked as a literary contributor to the newspaper "Literature and Art" (1968-1973). Founder and artistic director of the cartoon studio of the Belarusfilm film studio (1975-1989), animation studios, including the ABC studio (1989-1995), vice-president of the Kadr-2 film and video studio (since 1995. ).
                        Member of the Belarusian Union of Journalists, the Belarusian Union of Cinematographers, the Belarusian Union of Artists and the Belarusian Popular Front "Renaissance". [1]
                        Author of the book "My City" (2005) and a collection of poems "Kazantip Notebook" (2006)
                    </div>
                </div>

            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container fluid style={{ marginTop: '1rem', fontFamily: "Orelega One" }}>
            <Container>
                <Row style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
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
                                    <li><a><svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg></a></li>
                                    <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" /></svg></a></li>
                                    <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" /></svg></a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-sm" style={{ marginBottom: "1rem" }}>
                        <Card style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            marginBottom: "2rem",
                            border: "0.2rem solid rgba(52, 58, 64, 1)",
                            backgroundColor: "transparent",
                        }}>
                            <Card.Img src={zahar} style={{ width: '12rem', height: "12rem", border: "0.2rem solid rgba(52, 58, 64, 1)", borderRadius: "50%", marginTop: "1rem" }} ></Card.Img>
                            <Card.Body style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                <Card.Title style={{ textAlign: "center", fontSize: "1.6rem", justifyContent: "center", display: "flex" }}>Zahar Shestakovich</Card.Title>
                                <Card.Text style={{ maxWidth: "20rem" }}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>

                                <ul style={{ display: "flex", listStyle: "none", padding: "0", }}>
                                    <li><a><svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg></a></li>
                                    <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" /></svg></a></li>
                                    <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" /></svg></a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </Container>
    </>
)