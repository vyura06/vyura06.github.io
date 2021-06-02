import React from 'react';
import JSONDATA from './components/MOCK_DATA.json';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import Search from './components/Search';
import { useTranslation } from 'react-i18next'
import { NavLink, useParams } from 'react-router-dom';

export default function Users() {

    let { userName } = useParams();
    let user = JSONDATA.find(val => val.last_name === userName);

    const { t } = useTranslation();

    return (
        <>
            <Container>

                <Row>
                    <Container fluid style={{ marginTop: "1rem", fontFamily: "Orelega One", marginBottom: "3rem" }}>
                        <Row>
                            <Col>
                                <div class="col-sm">
                                    <h1>{t("home.logo")}</h1>
                                    <Search></Search>
                                </div>
                            </Col>
                            <Col>
                                <NavLink to="/">
                                    <Button variant="dark" style={{
                                        width: "5rem",
                                        float: "right",
                                        fontFamily: "Orelega One"
                                    }}>{t("back")}
                                    </Button>
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid style={{ marginTop: "1rem", fontFamily: "Orelega One", marginBottom: "3rem" }}>
                    <div class="col-sm" style={{ justifyContent: "center", display: "flex" }}>
                        <Table striped bordered hover size="lg" style={{ marginTop: "1rem", fontFamily: "Orelega One" }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "8px" }}>#</th>
                                    <th style={{ padding: "8px" }}>{t("repository")}</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "lightblue", opacity: "0.6", color: "black", fontWeight: "400" }}>
                                {
                                    JSONDATA.map((val, index) => {
                                        return (
                                            <tr sty>
                                                <th style={{ padding: "8px" }}><a href={val.link} style={{ margin: "8px" }}>{index + 1}</a></th>
                                                <th style={{ padding: "8px" }}><a href={val.link} style={{ margin: "8px" }}>{val.first_name}</a></th>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                    </Container>
                </Row>
            </Container>

        </>
    )
}