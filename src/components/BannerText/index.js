import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function BannerText() {
    return (
        <>
            <div className="banner-text">
                <Container>
                    <Row className="align-items-center banner-text--border-bottom">

                        <Col xl={5} xs={12} lg={12} md={12} sm={12}>
                            <div className="banner-text__image wow bounceInUp">
                                <img src="/left-image.png" alt="Teammate"/>
                            </div>
                        </Col>

                        <Col xl={1}></Col>

                        <Col xs={12} xl={6} lg={12} md={12} sm={12}>
                            <div className="banner-text__content">
                                <h2 className="banner-text__title">Let's discuss about your project</h2>
                                <p className="banner-text__desc">Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo
                                    efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BannerText;