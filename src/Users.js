import React from 'react';
import JSONDATA from './components/MOCK_DATA.json';
import { Table, Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import { useTranslation } from 'react-i18next'

export default function Users(){

    const { t } = useTranslation();

    return(
        <>  
             <Container>
                <Row>
                    <Container fluid style={{ marginTop: "1rem", fontFamily: "Orelega One", marginBottom:"3rem" }}>
                        <Row>
                            <div class="col-sm">
                                <h1>{t("home.logo")}</h1>
                                <Search></Search>
                            </div>
                        </Row>
                    </Container>
                    <Container fluid>
                        <div class="col-sm" style={{justifyContent:"center", display:"flex"}}>
                            <Table striped bordered hover size="lg" style={{ marginTop: "1rem", fontFamily: "Orelega One"}}>
                                <thead>
                                    <tr>
                                        <th style={{padding:"8px"}}>#</th>
                                        <th style={{padding:"8px"}}>{t("users.first")}</th>
                                        <th style={{padding:"8px"}}>{t("users.last")}</th>
                                        <th style={{padding:"8px"}}>{t("users.year")}</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "lightblue", opacity: "0.6", color: "black", fontWeight: "400" }}>
                                    {
                                        JSONDATA.map((val, index) => {
                                            return (
                                                <tr sty>
                                                    <th style={{padding:"8px"}}><a href={val.link} style={{margin:"8px"}}>{index + 1}</a></th>
                                                    <th style={{padding:"8px"}}><a href={val.link} style={{margin:"8px"}}>{val.first_name}</a></th>
                                                    <th style={{padding:"8px"}}><a href={val.link} style={{margin:"8px"}}>{val.last_name}</a></th>
                                                    <th style={{padding:"8px"}}><a href={val.link} style={{margin:"8px"}}>{val.year_of_birth}</a></th>
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