import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import ft from '../img/Ft.jpg';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next'

const Styles = styled.div `
    .jumbo {
        background: url(${ft}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: 2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

function Jumbotron () {
    const { t } = useTranslation();
    return(
        <>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>{t("home.logo")}</h1>
                </Container>
            </Jumbo>
        </Styles>
        </>
    )
}

export default Jumbotron;