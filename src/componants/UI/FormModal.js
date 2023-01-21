import React from 'react';
import { useForm } from 'react-hook-form';
import '../../style/FormModel.css'

const FormModal = ({ imgUrl, model, carName, automatic, price }) => {
    const { register, handleSubmit } = useForm();

    const handleBooking = (data) => {
        console.log(data);
    }
    return (
        <div className='bookingForm'>
            <form onSubmit={handleSubmit(handleBooking)}>
                <img className='booking_img' src={imgUrl} alt="" />
                <input type='text' hidden defaultValue={imgUrl} {...register("imgUrl")} placeholder="" />

                <input type='text' defaultValue={carName} {...register("firstName")} placeholder="First name" />
                <input type='text' defaultValue={model} {...register("model")} placeholder="First name" />
                <input type='text' defaultValue={automatic} {...register("automatioc")} placeholder="First name" />
                <input type='text' defaultValue={price}{...register("price")} placeholder="First name" />

                <input type='date' {...register("date")} />

                <input className='car_btn' type="submit" />
            </form>


        </div>
    );
};

export default FormModal;