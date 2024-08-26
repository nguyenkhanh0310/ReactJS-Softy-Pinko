import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Contact() {
    return (
        <>
            <div className="contact">
                <Container className="container">

                    <Row className="row">
                        <Col xs={12}>
                            <div className="box-head">
                                <h2 className="box-head__title">Talk To Us</h2>
                                <p className="box-head__desc">Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat
                                    hendrerit semper.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row >

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="contact__text">
                                <h5 className="contact__title">Keep in touch</h5>
                                <p className="contact__desc">110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                                    auctor non lorem</p>
                                <p className="contact__desc">You are NOT allowed to re-distribute Softy Pinko template on any template collection
                                    websites. Thank you.</p>
                            </div>
                        </Col>

                        <Col xl={8} lg={8} md={6} sm={12}>
                            <div className="contact__form">
                                <form action="">
                                    <Row className="row">
                                        <Col xl={6} lg={6} md={12} sm={12} >
                                            <input type="text" placeholder="Full Name" className="form-control" />
                                        </Col>

                                        <Col xl={6} lg={6} md={12} sm={12} >
                                            <input type="email" placeholder="E-Mail Address" className="form-control" />
                                        </Col>

                                        <Col xl={12}>
                                            <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                                        </Col>

                                        <Col xl={12} >
                                            <button className="button button--three">SEND MESSAGE</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;