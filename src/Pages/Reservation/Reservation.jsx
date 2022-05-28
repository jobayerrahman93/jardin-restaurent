import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Img from '../../asset/reservation.png';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import './Reservation.css';

const Reservation = () => {
    const [value, onChange] = useState(new Date());
    console.log(value.getMonth() + 1);
    // console.log(value.());
    console.log(value.getUTCFullYear());

    return (
        <>

            <Navigation />
            <div className="reservation-section">
                <div className="breadcrumb ">
                    <div className="container text-center">
                        <h1 className='breadcrumb-title mt-5'>RESERVATION</h1>
                        <ul>
                            <li className='d-inline'><a href="" >Home</a></li>
                            <li className='bread-symbol'><a href="" className='ms-2'>Reservation</a></li>
                        </ul>
                    </div>
                </div>


                <div className="reservation-content">
                    <div className="container">
                        <h1 className='text-center heading-title'>RÉSERVER UNE TABLE</h1>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <div>
                                    <img className='img-gluid' src={Img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <Calendar onChange={onChange} value={value} />
                                </div>
                            </div>
                        </div>

                        <div className="time-show">
                            <h1>Sélectionner Date</h1>
                            <input type="text" value={value.getDate()} />

                            <button type="button">Next</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    );
};

export default Reservation;