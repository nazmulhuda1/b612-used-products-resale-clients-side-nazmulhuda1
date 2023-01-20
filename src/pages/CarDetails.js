import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import BookingForm from '../componants/UI/BookingForm';
import Loading from '../componants/UI/Loading';
import PaymentMethod from '../componants/UI/PaymentMethod';
import CommonSection from "../componants/UI/CommonSection";

const CarDetails = () => {
    const { id } = useParams()

    const { data: singleCar = [], isLoading } = useQuery({
        queryKey: ['singleCar'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carProducts/${id}`);
            const data = await res.json();
            return data;
        }
    });
    // Loading
    if (isLoading) {
        return <Loading />
    }

    const caritem = singleCar.data;
    const { carName, imgUrl, price, rating, description, model, automatic, speed, gps, seatType, brand } = caritem;

    return (
        <Helmet title="details">
            <CommonSection title={carName} />
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt="" className="w-100" />
                        </Col>

                        <Col lg="6">
                            <div className="car__info">
                                <h2 className="section__title">{carName}</h2>

                                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent__price fw-bold fs-4">
                                        ${price}.00 / Day
                                    </h6>

                                    <span className=" d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        ({rating} ratings)
                                    </span>
                                </div>

                                <p className="section__description">
                                    {description}
                                </p>

                                <div
                                    className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: "4rem" }}
                                >
                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-roadster-line"
                                            style={{ color: "#f9a826" }}
                                        ></i>{" "}
                                        {model}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-settings-2-line"
                                            style={{ color: "#f9a826" }}
                                        ></i>{" "}
                                        {automatic}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-timer-flash-line"
                                            style={{ color: "#f9a826" }}
                                        ></i>{" "}
                                        {speed}
                                    </span>
                                </div>

                                <div
                                    className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: "2.8rem" }}
                                >
                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                                        {gps}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-wheelchair-line"
                                            style={{ color: "#f9a826" }}
                                        ></i>{" "}
                                        {seatType}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-building-2-line"
                                            style={{ color: "#f9a826" }}
                                        ></i>{" "}
                                        {brand}
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <Col lg="7" className="mt-5">
                            <div className="booking-info mt-5">
                                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                                <BookingForm />
                            </div>
                        </Col>

                        <Col lg="5" className="mt-5">
                            <div className="payment__info mt-5">
                                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                                <PaymentMethod />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarDetails;