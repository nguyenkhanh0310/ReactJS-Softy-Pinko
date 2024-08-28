import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBarsStaggered } from "react-icons/fa6";
import React, { useState } from 'react';
function Header() {

    const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
      setMenuVisible(!menuVisible); // Toggle menu visibility on click
    };

    return (
        <>
            <header className="header">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="header__main">
                                <div className="header__logo">
                                    <a href="/">
                                        <img src="/logo.png" alt="Logo"/>
                                    </a>
                                </div>
                                <div className={`header__menu ${menuVisible ? 'header__menu--show' : ''}`}>
                                    <ul>
                                        <li><a href="#" className="header__menu--active">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Work Process</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Pricing Tables</a></li>
                                        <li><a href="#">Blog Entries</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="header__icon--mobi" onClick={toggleMenu}>
                                    <FaBarsStaggered />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;