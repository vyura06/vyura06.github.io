import React from 'react';
import {Container} from 'react-bootstrap';

import { useTranslation } from 'react-i18next'

function Footer () {
    const { t } = useTranslation();
    return(
        <>
            <Container fluid style={{backgroundColor: '#343a40', color: '#adb1b8'}}>
                <Container style={{display: 'flex', justifyContent: 'center', padding: '8px'}}>
                    <p>{t("home.logo")}</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer