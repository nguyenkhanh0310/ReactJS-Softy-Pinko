import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Blog() {
    return (
        <>
            <div className="blog">
                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className="box-head">
                                <h2 className="box-head__title">Blog Entries</h2>
                                <p className="box-head__desc">Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae,
                                    placerat nibh. Cras maximus venenatis molestie.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12} >
                            <div className="blog__box">
                                <div className="blog__image">
                                    <img src="/blog-item-01.png" alt="Blog item" />
                                </div>
                                <div className="blog__content">
                                    <h3 className="blog__title">Vivamus ac vehicula dui</h3>
                                    <p className="blog__desc">Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus
                                        nunc. Nulla in sagittis eros. Aliquam egestas augue.</p>
                                    <a href="#" className="button button--three">READ MORE</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12} >
                            <div className="blog__box">
                                <div className="blog__image">
                                    <img src="/blog-item-02.png" alt="Blog item" />
                                </div>
                                <div className="blog__content">
                                    <h3 className="blog__title">Vivamus ac vehicula dui</h3>
                                    <p className="blog__desc">Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus
                                        nunc. Nulla in sagittis eros. Aliquam egestas augue.</p>
                                    <a href="#" className="button button--three">READ MORE</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12} >
                            <div className="blog__box">

                                <div className="blog__image">
                                    <img src="/blog-item-03.png" alt="Blog item" />
                                </div>
                                <div className="blog__content">
                                    <h3 className="blog__title">Vivamus ac vehicula dui</h3>
                                    <p className="blog__desc">Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus
                                        nunc. Nulla in sagittis eros. Aliquam egestas augue.</p>
                                    <a href="#" className="button button--three">READ MORE</a>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Blog;