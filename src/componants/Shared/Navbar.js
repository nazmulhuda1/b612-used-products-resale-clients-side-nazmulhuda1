import React, { useContext, useRef } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../style/Navbar.css";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/cars",
        display: "Cars",
    },
    {
        path: "/blog",
        display: "Blog",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/contact",
        display: "Contact",
    },


];


const Navbar = () => {
    // ==== Menu bar toggle
    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
    // ========
    const menuRef = useRef(null);
    const { logOut, user, loading } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/login';
    // handle LogOut
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("user logOut")
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }

    // ====== user Menu
    const userMenu = <React.Fragment>
        {
            user?.uid ?
                <>
                    <Link to="/login" className=" d-flex align-items-center gap-1">
                        <i class="ri-dashboard-fill"></i> Dashboard
                    </Link>
                    <Link to="/signup" className=" d-flex align-items-center gap-1">
                        <img className='avater' src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="User Avater" />
                    </Link>
                    <Link onClick={handleLogOut} to="/login" className=" d-flex align-items-center gap-1">
                        <i class="ri-logout-circle-r-line"></i> LogOut
                    </Link>
                </> : <>
                    <Link to="/login" className=" d-flex align-items-center gap-1">
                        <i className="ri-login-circle-line"></i> Login
                    </Link>

                    <Link to="/signup" className=" d-flex align-items-center gap-1">
                        <i className="ri-user-line"></i> Register
                    </Link>
                </>
        }




    </React.Fragment>


    return (
        <header className="header">
            {/* ============ header top ============ */}
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__left">
                                <span>Need Help?</span>
                                <span className="header__top__help">
                                    <i className="ri-phone-fill"></i> +1-202-555-0149
                                </span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                <Link to="/login" className=" d-flex align-items-center gap-1">
                                    <i className="ri-facebook-line"></i>
                                </Link>

                                <Link to="/signup" className=" d-flex align-items-center gap-1">
                                    <i className="ri-twitter-line"></i>
                                </Link>
                                <Link to="/signup" className=" d-flex align-items-center gap-1">
                                    <i className="ri-youtube-line"></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* =============== header middle =========== */}
            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1>
                                    <Link to="/home" className=" d-flex align-items-center gap-2">
                                        <i className="ri-car-line"></i>
                                        <span>
                                            Resale <br /> Car
                                        </span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-earth-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Bangladesh</h4>
                                    <h6>Sylhet City, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-time-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>

                        <Col
                            lg="2"
                            md="3"
                            sm="0"
                            className=" d-flex align-items-center justify-content-end "
                        >
                            <button className="header__btn btn ">
                                <Link to="/contact">
                                    <i className="ri-phone-line"></i> Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ========== main navigation =========== */}

            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                        <div className="nav_logo">
                            <h1>
                                <Link to="/home" className=" d-flex align-items-center gap-2">
                                    <i className="ri-car-line"></i>
                                    <span>
                                        Resale<br />Car
                                    </span>
                                </Link>
                            </h1>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? "nav__active nav__item" : "nav__item"
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="nav__right_user">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                {userMenu}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Navbar;