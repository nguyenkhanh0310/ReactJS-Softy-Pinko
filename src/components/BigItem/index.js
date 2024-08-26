import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function BigItem() {
    return (
        <>
            <div className="big-item">
                <Container>
                    <Row className="row align-items-center">
                        <Col xl={6} lg={12} md={12} sm={12} xs={12}>
                            <div className="big-item__content">
                                <h2 className="big-item__title">We can help you to grow your business</h2>
                                <p className="big-item__desc">Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum
                                    lectus
                                    libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
                                    dolor elit.</p>
                            </div>
                        </Col>

                        <Col xl={1}></Col>

                        <Col xl={5} lg={12} md={12} sm={12} xs={12}>
                            <div className="big-item__image wow bounceInUp">
                                <img src="/right-image.png" alt="Help" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BigItem;