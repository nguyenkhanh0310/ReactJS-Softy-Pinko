import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function HomeParallax() {
    return (
        <>
            <div className="home-parallax">
                <Container className="container">
                    <Row className="row">

                        <Col xs={12} >
                            <div className="box-head ">
                                <h2 className="box-head__title box-head--white">Work Process</h2>
                                <p className="box-head__desc box-head--white">Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum,
                                    vehicula ut ex. Donec ante diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Get Ideas
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Sketch Up
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Discuss
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Revise
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Appove
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                        <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                            <a className="home-parallax__box" href="#">
                                <div className="home-parallax__image">
                                    <img src="/work-process-item-01.png" alt="Work Process" />
                                </div>
                                <h3 className="home-parallax__title">
                                    Launch
                                </h3>
                                <p className="home-parallax__desc">Godard pabst prism fam cliche</p>
                            </a>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>
    )
}

export default HomeParallax;