import React from 'react';
import about1 from '../../asset/about-1.jpg';
import about2 from '../../asset/about-2.jpg';
import about3 from '../../asset/about-3.jpg';
import promo1 from '../../asset/promo-1.jpg';
import promo2 from '../../asset/promo-2.jpg';
import './About.css';


const About = () => {
    return (
        <>

            <div className="about-section">
                <div className="about-wrapper">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 ">
                                <img className='img-fluid' src={promo2} alt="" />
                            </div>
                            <div className="col-lg-6  col-md-6">
                                <img className='img-fluid' src={promo1} alt="" />
                            </div>

                            <div className="btn-area mt-5">
                                <a href="" className='cmn-btn  d-inline-block w-auto'>order</a>
                                <a href="" className='cmn-btn  d-inline-block w-auto ms-2'>see the map</a>
                            </div>

                        </div>



                        <div className="about-content">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <h6>Delicious Restaurant</h6>
                                    <h1 className='title'>RESTAURANT GARDEN OF KASHMIR ANGOULEME</h1>
                                    <p className='about-description w-75'>WE AIM TO PRODUCE AT HOME AS MUCH AS POSSIBLE FOR THE BEST QUALITY AND TO REDUCE FOOD MILES. OUR DELICIOUS CAKES, TRADITIONAL DEVON SCONES, BREADS, SOUPS, SAUCES AND SIDE DISHES ARE PRODUCED IN OUR OWN KITCHENS. INDIAN RESTAURANT IN FRANCE, INCLUDE A WONDERFUL RESTAURANT MENU WHERE YOU CAN ENJOY THE BEST INDIAN AND PAKISTANI CUISINE IN THE RESTAURANT AND MUCH MORE. KASHMIR GARDEN IS THE BEST OPTION AROUND YOU. INDIAN AND PAKISTANESE FINE GASTRONOMY</p>
                                </div>
                                <div className="col-lg-3  col-md-6 mt-0 mt-md-5">
                                    <div className="img-content">
                                        <img className='img-fluid mb-4 mt-4 mt-md-0 mt-lg-0' src={about1} alt="" />
                                        <img className='img-fluid  mb-4' src={about2} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-6">
                                    <div className="img-content">
                                        <img className='img-fluid' src={about3} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </>
    );
};

export default About;