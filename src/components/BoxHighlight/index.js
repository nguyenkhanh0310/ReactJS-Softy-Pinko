import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function BoxHighlight() {
    return (
        <>
            <div className="box-highlight">
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={4} xl={4} xs={12}>
                            <div className="box-highlight__box">
                                <div className="box-highlight__icon">
                                    <img src="/featured-item-01.png" alt="Teamwork" />
                                </div>
                                <h2 className="box-highlight__title">Modern Strategy</h2>
                                <p className="box-highlight__desc">Customize anything in this template to fit your website needs</p>
                            </div>
                        </Col>

                        <Col sm={6} md={6} lg={4} xl={4} xs={12}>
                            <div className="box-highlight__box">
                                <div className="box-highlight__icon">
                                    <img src="/featured-item-01.png" alt="Teamwork" />
                                </div>
                                <h2 className="box-highlight__title">Best Relationship</h2>
                                <p className="box-highlight__desc">Contact us immediately if you have a question in mind</p>
                            </div>
                        </Col>

                        <Col sm={6} md={6} lg={4} xl={4} xs={12}>
                            <div className="box-highlight__box">
                                <div className="box-highlight__icon">
                                    <img src="/featured-item-01.png" alt="Teamwork" />
                                </div>
                                <h2 className="box-highlight__title">Ultimate Marketing</h2>
                                <p className="box-highlight__desc">You just need to tell your friends about our free templates</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BoxHighlight;