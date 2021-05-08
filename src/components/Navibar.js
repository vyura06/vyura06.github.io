import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import i18n from '../i18n';

import { useTranslation } from 'react-i18next'

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &: hover{
            color: white
        }
    }
`

function Navibar() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const { t } = useTranslation();

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">{t("home.logo")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"> 
                            <Nav.Link href="/">{t("home.home")}</Nav.Link>
                            <Nav.Link href="/users">{t("home.film")}</Nav.Link>
                            <Nav.Link href="/about">{t("home.about")}</Nav.Link>
                        </Nav>
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-menu-align-right" style={{color:'#adb1b8'}}>
                                    {t("home.language")}
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{backgroundColor:"#343a40"}}>
                                    <Dropdown.Item>
                                        <div onClick={() => changeLanguage('en')} style={{color:'#adb1b8'}}>{t("home.lng-en")}</div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div onClick={() => changeLanguage('ru')} style={{color:'#adb1b8'}}>{t("home.lng-ru")}</div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        </>
    );
}

export default Navibar