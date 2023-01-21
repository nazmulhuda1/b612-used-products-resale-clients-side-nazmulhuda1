import React from 'react';
import { toast } from 'react-toastify';
import BookingModel from '../componants/UI/BookingModel';

const Blog = (e) => {
    const handleCart = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const model = form.model.value

        const carCart = {
            name,
            imgUrl,
            model
        }
        // =============
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleCart} className='d-flex'>
                <input type="text" name='name' placeholder='car name' />
                <input type="text" name='imgUrl' hidden placeholder='url' />
                <input type="text" name='model' placeholder='model' />
                <button>Add car</button>
            </form>
        </div>
    );
};

export default Blog;