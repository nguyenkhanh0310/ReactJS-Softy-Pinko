import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function PricingPlans() {
    return (
        <>
            <div className="pricing-plans">
                <Container>

                    <Row>
                        <Col xs={12} >
                            <div className="box-head">
                                <h2 className="box-head__title">Pricing Plans</h2>
                                <p className="box-head__desc">Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum,
                                    quis congue risus volutpat.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row >

                        <Col xl={4} lg={4} md={6} sm={12} xs={12} >
                            <div className="pricing-plans__box">
                                <h3 className="pricing-plans__title">Starter</h3>
                                <div className="pricing-plans__price">
                                    <span className="pricing-plans__money">$ 14.50</span>
                                    <span className="pricing-plans__monthly">monthly</span>
                                </div>
                                <div className="pricing-plans__function">
                                    <ul>
                                        <li className="active">60 GB space</li>
                                        <li className="active">600 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li>15-minute support</li>
                                        <li>Unlimited Emails</li>
                                        <li>24/7 Security</li>
                                    </ul>
                                </div>
                                <a href="#" className="button button--three mt-4">PURCHASE NOW</a>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="pricing-plans__box active">
                                <h3 className="pricing-plans__title">Premium</h3>
                                <div className="pricing-plans__price">
                                    <span className="pricing-plans__money">$ 21.50</span>
                                    <span className="pricing-plans__monthly">monthly</span>
                                </div>
                                <div className="pricing-plans__function">
                                    <ul>
                                        <li className="active">60 GB space</li>
                                        <li className="active">600 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li className="active">15-minute support</li>
                                        <li>Unlimited Emails</li>
                                        <li>24/7 Security</li>
                                    </ul>
                                </div>
                                <a href="#" className="button button--three mt-4">PURCHASE NOW</a>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="pricing-plans__box">
                                <h3 className="pricing-plans__title">Advanced</h3>
                                <div className="pricing-plans__price">
                                    <span className="pricing-plans__money">$ 42.00</span>
                                    <span className="pricing-plans__monthly">monthly</span>
                                </div>
                                <div className="pricing-plans__function">
                                    <ul>
                                        <li className="active">60 GB space</li>
                                        <li className="active">600 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li className="active">15-minute support</li>
                                        <li className="active">Unlimited Emails</li>
                                        <li className="active">24/7 Security</li>
                                    </ul>
                                </div>
                                <a href="#" className="button button--three mt-4">PURCHASE NOW</a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PricingPlans;