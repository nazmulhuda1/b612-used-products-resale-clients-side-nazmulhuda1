import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../../style/FormModel.css'

const FormModal = ({ imgUrl, model, carName, automatic, price }) => {


    // handle booking data
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const imgUrl = form.imgUrl.value;
        const carName = form.carName.value;
        const model = form.model.value;
        const automatic = form.automatic.value;
        const price = form.price.value;
        const date = form.date.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            imgUrl,
            carName,
            model,
            automatic,
            price,
            date
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookingCars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div className='bookingForm'>
            <form onSubmit={handleBooking}>
                <img className='booking_img' src={imgUrl} alt="" />
                <input type='url' name='imgUrl' hidden defaultValue={imgUrl} />

                <input type='text' name='carName' defaultValue={carName} />
                <input type='text' name='model' defaultValue={model} />
                <input type='text' name='automatic' defaultValue={automatic} />
                <input type='text' name='price' defaultValue={price} />
                <input type='date' name='date' />

                <button>Submit</button>
            </form>


        </div>
    );
};

export default FormModal;