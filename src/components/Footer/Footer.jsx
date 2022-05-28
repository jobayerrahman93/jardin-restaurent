import React from 'react';
import logo from '../../asset/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>

            <div className="footer-section">
                <div className="container">
                    <img src={logo} alt="" />
                    <p className='mt-3'>15-17 Rue Raymond Audour, 16000 Angoulême</p>
                    <p className='mt-3 mb-5 pb-5'>PHONE - 05 45 95 03 03</p>


                    <hr />

                    <div className="footer-bottom d-flex justify-content-between">
                        <p> © Restaurant Jardin de Kashmir Angoulême all Rights Reserved.</p>
                        <div className="social-link d-flex">
                            <a href='' className="social-div">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href='' className="social-div">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;