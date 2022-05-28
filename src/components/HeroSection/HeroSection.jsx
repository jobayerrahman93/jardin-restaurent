import React from 'react';
import { Link } from 'react-router-dom';
import heroProduct from '../../asset/hero-product.png';
import logo from '../../asset/logo.png';
import order from '../../asset/order.png';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <>

            <div className="hero-section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/menu">Menu</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/reservation">Reservation</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img src={logo} alt="" /></a>
                                    </li>

                                    <li className="nav-item pages-dropdown">
                                        <a className="nav-link">Pages
                                        </a>
                                        <div className="pages-hover">
                                            <ul>
                                                <li><Link to="/about-us">About Us</Link></li>
                                                <li><Link to="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><i className="fa-solid fa-phone-flip me-2"></i> 05 45 95 03 03</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><i className="fa-solid fa-user-large"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>




                    {/* product area */}


                    <div className="row mt-5 hero-product">
                        <div className="col-lg-6">
                            <img className='img-fluid' src={heroProduct} alt="" />
                        </div>
                        <div className="col-lg-6">

                            <h1 className='product-name mt-5 pt-5' >chicken tikka masala menu</h1>
                            <h3 className='product-description'>chicken tikka masala + naan cheese + coca cola</h3>

                            <button type="button" className="cart-btn">Order <i className="fa-solid fa-cart-shopping"></i></button>
                            <p className='price d-inline ms-3'>&euro; 17.00 <del > &euro; 19.90</del></p>
                        </div>
                    </div>







                </div>


                <div className="order-area mt-5">
                    <div className="container text-center">
                        <img className='img-fluid' src={order} alt="" />
                    </div>


                </div>


            </div>

        </>
    );
};

export default HeroSection;