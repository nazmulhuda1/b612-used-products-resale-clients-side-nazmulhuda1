import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import { AuthContext } from '../Context/AuthProvider';
import '../style/Sign.css'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('');

    // == handle sing up function
    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser()
                    .then(() => {
                        toast('User Created Successfully.')
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }


    return (
        <Helmet title='Register'>
            <section className='form_action'>
                <Container>
                    <Row className='d-flex form-aling'>
                        <Col lg='6' md='6'>
                            <div className="form_area">
                                <h3 className='form_title'>Register</h3>
                                <form onSubmit={handleSubmit(handleSignUp)}>
                                    <div className="formControl">
                                        <label> Full Name</label>
                                        <input type="text" name='name' className='input-bg' {...register("name", { required: true, maxLength: 80 })} />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                    </div>

                                    <div className="formControl">
                                        <label>Email</label>
                                        <input type="text" name='email' className='input-bg' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="formControl">
                                        <label>Password</label>
                                        <input type="password" name='password' className='input-bg' {...register("password", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>

                                    <input className='submit-btn' type="submit" />
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                </form>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="socila_submit">
                                <Link to={'/'} className='social-btn'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                                    <span>Google</span>
                                </Link>
                                <Link to={'/'} className='social-btn'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png" alt="Facebook" />
                                    <span>Facebook</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default SignUp;