import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="footer">
                <Container >

                    <Row>
                        <Col xl={12}>
                            <div className="footer__list">
                                <ul>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaWifi /></a></li>
                                    <li><a href="#"><FaDribbble /></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <span className="footer__copy-right">
                                COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: TEMPLATEMO
                            </span>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>

    );
}

export default Footer;