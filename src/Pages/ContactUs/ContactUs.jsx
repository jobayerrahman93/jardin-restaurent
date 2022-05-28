import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <>

            <Navigation />

            <div className="contactUs-section">
                <div className="breadcrumb ">
                    <div className="container text-center">
                        <h1 className='breadcrumb-title mt-5'>CONTACT US</h1>
                        <ul>
                            <li className='d-inline'><a href="" >Home</a></li>
                            <li className='bread-symbol'><a href="" className='ms-2'>Contact-us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-content">
                    <div className="container">
                        <h6 className='contact-subtitle  text-center'>Get in touch

                        </h6>
                        <h1 className='contact-title  text-center'>CONTACT US</h1>



                        <div className="row mt-5 contact-form-area pb-5">
                            <div className="col-lg-5">
                                <div>
                                    <h1 className='contact-heading'>Contact Details</h1>
                                    <p className='contact-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</p>


                                    <div>
                                        <div className='d-flex align-items-center mb-3'>
                                            <i class="fa-solid fa-house-chimney"></i>
                                            <p className='ms-2'>15-17 Rue Raymond Audour, 16000 Angouleme</p>
                                        </div>
                                        <div className='d-flex align-items-center  mb-3'>
                                            <i class="fa-solid fa-phone-flip"></i>
                                            <p className='ms-2'>05 45 95 03 03</p>
                                        </div>
                                        <div className='d-flex align-items-center mb-3'>
                                            <i class="fa-solid fa-envelope"></i>
                                            <p className='ms-2'>jardindekashmir@gmail.com</p>
                                        </div>
                                        <div className='d-flex align-items-center mb-3'>
                                            <i class="fa-solid fa-clock"></i>
                                            <p className='ms-2 time'>Monday:
                                                12:00 - 14.30 and 18:00 - 23.30</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-7">

                                <div className='contact-form'>
                                    <div class="mb-3">

                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />

                                    </div>
                                    <div class="mb-3">

                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />

                                    </div>
                                    <div class="mb-3">

                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />

                                    </div>
                                    <div class="mb-3">

                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Message" />

                                    </div>
                                    <div class="mb-3">


                                        <button type='button' className='sendBtn'>Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.8854395084663!2d0.15409487620553433!3d45.65027010426645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fe327655d4b9e1%3A0xe3aa1435a1961a30!2sJardin%20de%20Kashmir%20Angoul%C3%AAme!5e1!3m2!1sen!2sbd!4v1650837773213!5m2!1sen!2sbd" width="100%" height="450" style="border:0;"></iframe> */}

                </div>





            </div>

            <Footer />

        </>
    );
};

export default ContactUs;