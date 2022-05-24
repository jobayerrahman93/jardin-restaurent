import React from 'react';
import specialTop from '../../asset/about-bottom.png';
import menu1 from '../../asset/menu-product-1.png';
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


                        <div className="row">
                            <div className="col-lg-3">
                                <div className="menu-box mt-5">
                                    <div className="product-box">
                                        <div className="img-media">
                                            <img className='img-fluid' src={menu1} alt="" />
                                        </div>

                                        <div className="product-description text-center">
                                            <h6>Chicken Biryani</h6>
                                            <div className='hr pb-2'></div>
                                            <div className="price">&euro;12.50</div>
                                        </div>
                                    </div>

                                    <a href='' className='cartBtns'>Add to cart <i class="fa-solid fa-cart-shopping"></i></a>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    );
};

export default SpecialMenu;