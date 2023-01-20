import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import { AuthContext } from '../Context/AuthProvider';
import '../style/Sign.css'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)
    console.log(errors);

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Create User Succussfully')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
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
                                        <label>First Name</label>
                                        <input type="text" className='input-bg' {...register("firstName", { required: true, maxLength: 80 })} />
                                    </div>

                                    <div className="formControl">
                                        <label>Email</label>
                                        <input type="text" className='input-bg' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="formControl">
                                        <label>Password</label>
                                        <input type="password" className='input-bg' {...register("password", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="formControl">
                                        <label>Phone Number</label>
                                        <input type="tel" className='input-bg' {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                                    </div>
                                    <div className="formControl">
                                        <select {...register("role", { required: true })}>
                                            <option value="client">Client</option>
                                            <option value="saler">Saler</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>

                                    <input className='submit-btn' type="submit" />
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