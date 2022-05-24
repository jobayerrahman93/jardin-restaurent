import React from 'react';
import specialTop from '../../asset/about-bottom.png';
import './SpecialMenu.css';

const SpecialMenu = () => {
    return (
        <>

            <div className="specialMenu-section">
                <div className="special-top">
                    <img src={specialTop} className="img-fluid" alt="" />
                </div>

                <div className="special-menu-wrapper">
                    <div className="container">
                        <div className="special-menu-wrapper-content text-center">
                            <h6 className='subtitle'>Fresh From Garden</h6>
                            <h1 className='title'>OUR SPECIAL MENU</h1>
                        </div>


                        {/* product card */}



                    </div>
                </div>
            </div>

        </>
    );
};

export default SpecialMenu;