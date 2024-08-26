import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function BannerMain() {
    return (
        <>
            <div className="banner-main">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="banner-main__wrap">
                                <h1 className="banner-main__title">
                                    We provide the best <strong>strategy </strong>
                                    to grow up your <strong>business</strong>
                                </h1>
                                <p className="banner-main__desc">
                                    Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely
                                    free of charge
                                </p>
                                <a href="#" className="button button--two">DISCOVER MORE</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BannerMain;