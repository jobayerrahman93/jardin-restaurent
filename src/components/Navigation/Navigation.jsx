import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';
import './Navigation.css';
const Navigation = () => {
    return (
        <>

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
                                <Link to="/menu" className="nav-link">Menu</Link>
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
        </>
    );
};

export default Navigation;