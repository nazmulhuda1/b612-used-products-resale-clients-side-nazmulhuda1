import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import AboutSection from '../componants/UI/AboutSection';
import BecomeDriverSection from '../componants/UI/BecomeDriverSection';
import BlogList from '../componants/UI/BlogList';
import CarItem from '../componants/UI/CarItem';
// import FindCarForm from '../componants/UI/FindCarForm';
import HeroSlider from '../componants/UI/HeroSlider';
import ServicesList from '../componants/UI/ServicesList';
import Testimonial from '../componants/UI/Testimonial';

const Home = () => {
    const [carData, setCarData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carProducts')
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [])
    return (
        <Helmet title={"Home"}>
            {/* ============= hero section =========== */}
            <section className="p-0 hero__slider-section">
                <HeroSlider />


            </section>
            {/* =========== about section ================ */}
            <AboutSection />
            {/* ========== services section ============ */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">See our</h6>
                            <h2 className="section__title">Popular Services</h2>
                        </Col>
                        <ServicesList />
                    </Row>
                </Container>
            </section>

            {/* =========== car offer section ============= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>

                        {carData.slice(0, 3).map((item) => (
                            <CarItem item={item} key={item._id} />
                        ))}

                    </Row>
                </Container>
            </section>
            {/* ========= Become Driver Section */}
            <BecomeDriverSection />
            {/* =========== testimonial section =========== */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-4 text-center">
                            <h6 className="section__subtitle">Our clients says</h6>
                            <h2 className="section__title">Testimonials</h2>
                        </Col>

                        <Testimonial />
                    </Row>
                </Container>
            </section>


            {/* =============== blog section =========== */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Explore our blogs</h6>
                            <h2 className="section__title">Latest Blogs</h2>
                        </Col>

                        <BlogList />
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default Home;