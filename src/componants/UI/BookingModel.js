
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import FormModal from './FormModal';

const BookingModel = ({ closeBtn, modal, toggle, imgUrl, model, carName, automatic, price }) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={''}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                    Selected Your Car
                </ModalHeader>
                <ModalBody>
                    <FormModal
                        imgUrl={imgUrl}
                        model={model}
                        price={price}
                        carName={carName}
                        automatic={automatic}
                    ></FormModal>
                </ModalBody>

            </Modal>
        </div>
    );
};

export default BookingModel;