import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import { AuthContext } from '../Context/AuthProvider';
import '../style/Sign.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        logIn(data.email, data.password)
            .then(result => {
                toast.success('Login Successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                const err = error.message
                console.log(err)
            })

    }


    return (
        <Helmet title='Login'>
            <section className='form_action'>
                <Container>
                    <Row className='d-flex form-aling'>
                        <Col lg='6' md='6'>
                            <div className="form_area">
                                <h3 className='form_title'>Login</h3>
                                <form onSubmit={handleSubmit(handleLogin)}>
                                    <div className="formControl">
                                        <label>Email</label>
                                        <input type="text" className='input-bg' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="formControl">
                                        <label>Password</label>
                                        <input type="password" className='input-bg' {...register("password", { required: true, pattern: /^\S+@\S+$/i })} />
                                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
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

export default Login;