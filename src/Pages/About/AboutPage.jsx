import React from 'react';
import about from '../../asset/about-1.jpg';
import aboutStory from '../../asset/about-story.jpg';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import './AboutPage.css';
const AboutPage = () => {
    return (
        <>

            <Navigation />
            <div className="aboutUs-section">
                <div className="breadcrumb ">
                    <div className="container text-center">
                        <h1 className='breadcrumb-title mt-5'>MENU ITEMS</h1>
                        <ul>
                            <li className='d-inline'><a href="" >Home</a></li>
                            <li className='bread-symbol'><a href="" className='ms-2'>About-us</a></li>
                        </ul>
                    </div>
                </div>



                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <img src={about} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ps-3 content-box">
                                    <div>
                                        <h6 className='about-subtitle '>Delicious Restaurant</h6>
                                        <h1 className='about-title'>ABOUT RESTAURANT JARDIN DE KASHMIR ANGOULÊME</h1>
                                        <p className='about-description text-dark'>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consector adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consector adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discover mt-5">
                        <div className="container text-center">
                            <h6 className='discover-subtitle'>Discover</h6>
                            <h1 className='discover-title'>our story</h1>
                            <p className='discover-description  w-75 mx-auto mt-5 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>

                            <img className='img-fluid w-25 mt-5 pb-5' src={aboutStory} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    );
};

export default AboutPage;