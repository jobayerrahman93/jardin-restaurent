import React from 'react';
import heroProduct from '../../asset/hero-product.png';
import logo from '../../asset/logo.png';
import order from '../../asset/order.png';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <>

            <div className="hero-section">
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container">

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mx-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Menu</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Reservation</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><img src={logo} alt="" /></a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link">Pages</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>




                    {/* product area */}


                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img className='img-fluid' src={heroProduct} alt="" />
                        </div>
                        <div className="col-lg-6">

                            <h1 className='product-name mt-5 pt-5' >chicken tikka masala menu</h1>
                            <h3 className='product-description'>chicken tikka masala + naan cheese + coca cola</h3>

                            <button type="button" class="cart-btn">Order <i class="fa-solid fa-cart-shopping"></i></button>
                            <p className='price d-inline ms-3'>&euro; 17.00 <del > &euro; 19.90</del></p>
                        </div>
                    </div>







                </div>


                <div className="order-area mt-5">
                    <div className="container">
                        <img className='img-fluid' src={order} alt="" />
                    </div>
                </div>


            </div>

        </>
    );
};

export default HeroSection;