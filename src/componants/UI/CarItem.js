import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style/CarItem.css";
import BookingModel from "./BookingModel";

const CarItem = (props) => {
    const { _id, imgUrl, model, carName, automatic, speed, price } = props.item;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
            &times;
        </button>
    );
    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">
                        ${price}.00 <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1">
                            <i className="ri-car-line"></i> {model}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                            <i className="ri-settings-2-line"></i> {automatic}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                            <i className="ri-timer-flash-line"></i> {speed}
                        </span>
                    </div>
                    <button onClick={toggle} className=" w-50 car__item-btn car__btn-rent">
                        <Link>Buy Car</Link>
                    </button>

                    <button className=" w-50 car__item-btn car__btn-details">
                        <Link to={`/cars/${_id}`}>Details</Link>
                    </button>
                </div>
            </div>
            {/* <div>

                <Modal isOpen={modal} toggle={toggle} className={''}>
                    <ModalHeader toggle={toggle} close={closeBtn}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Do Something
                        </Button>

                    </ModalFooter>
                </Modal>
            </div> */}
            <BookingModel
                imgUrl={imgUrl}
                model={model}
                price={price}
                carName={carName}
                automatic={automatic}
                closeBtn={closeBtn}
                modal={modal}
                toggle={toggle}
            >
            </BookingModel>
        </Col>
    );
};

export default CarItem;
