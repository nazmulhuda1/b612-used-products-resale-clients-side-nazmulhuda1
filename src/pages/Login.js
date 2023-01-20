import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../componants/Shared/Helmet';
import '../style/Sign.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const handleLogin = () => {

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
                                        <input type="text" className='input-bg' {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="formControl">
                                        <label>Password</label>
                                        <input type="password" className='input-bg' {...register("Password", { required: true, pattern: /^\S+@\S+$/i })} />
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