import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Testimonials() {
    return (
        <>
            <div className="testimonials">
                <Container >

                    <Row >
                        <Col xs={12}>
                            <div className="box-head">
                                <h2 className="box-head__title">What do they say?</h2>
                                <p className="box-head__desc">Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit
                                    eros a turpis. Ut sagittis lectus libero.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="testimonials__box">
                                <div className="testimonials__icon">
                                    <img src="/testimonial-icon.png" alt="Testimonials icon" />
                                </div>
                                <p className="testimonials__desc">Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci.
                                    Maecenas a finibus odio.</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__avatar">
                                        <img src="/image.png" alt="Avatar" />
                                    </div>
                                    <div className="testimonials__person">
                                        <span className="testimonials__name">Catherine Soft</span>
                                        <p className="testimonials__position">Managing Director</p>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="testimonials__box">
                                <div className="testimonials__icon">
                                    <img src="/testimonial-icon.png" alt="Testimonials icon" />
                                </div>
                                <p className="testimonials__desc">Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque
                                    orci. Maecenas a finibus odio.</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__avatar">
                                        <img src="/image.png" alt="Avatar" />
                                    </div>
                                    <div className="testimonials__person">
                                        <span className="testimonials__name">Catherine Soft</span>
                                        <p className="testimonials__position">Managing Director</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="testimonials__box">
                                <div className="testimonials__icon">
                                    <img src="/testimonial-icon.png" alt="Testimonials icon" />
                                </div>
                                <p className="testimonials__desc">Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque
                                    orci. Maecenas a finibus odio.</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__avatar">
                                        <img src="/image.png" alt="Avatar" />
                                    </div>
                                    <div className="testimonials__person">
                                        <span className="testimonials__name">Catherine Soft</span>
                                        <p className="testimonials__position">Managing Director</p>
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

export default Testimonials;