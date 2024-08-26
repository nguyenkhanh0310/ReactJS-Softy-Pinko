import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function CounterParallax() {
    return (
        <>
            <div className="counter-parallax">
                <Container className="container">
                    <Row className="row">

                        <Col xl={3} lg={3} md={6} sm={12} >
                            <div className="counter-parallax__box">
                                <div className="counter-parallax__content">
                                    <div className="counter-parallax__number">
                                        126
                                    </div>
                                    <div className="counter-parallax__title">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} >
                            <div className="counter-parallax__box">
                                <div className="counter-parallax__content">
                                    <div className="counter-parallax__number">
                                        63
                                    </div>
                                    <div className="counter-parallax__title">
                                        Happy Clients
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} >
                            <div className="counter-parallax__box">
                                <div className="counter-parallax__content">
                                    <div className="counter-parallax__number">
                                        18
                                    </div>
                                    <div className="counter-parallax__title">
                                        Awards Wins
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} >
                            <div className="counter-parallax__box no-circle">
                                <div className="counter-parallax__content">
                                    <div className="counter-parallax__number">
                                        27
                                    </div>
                                    <div className="counter-parallax__title">
                                        Countries
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>

    )
}

export default CounterParallax;