import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import CarItem from '../componants/UI/CarItem';
import CommonSection from '../componants/UI/CommonSection';

const CarListing = () => {
    const [carData, setCarData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/carProducts')
            .then(res => res.json())
            .then(data => setCarData(data))
    }, []);
    return (
        <Helmet title='cars'>
            <CommonSection title='Choose Your Car' />

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> Sort By
                                </span>

                                <select>
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>

                        {carData.map((item) => (
                            <CarItem item={item} key={item._id} />
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarListing;