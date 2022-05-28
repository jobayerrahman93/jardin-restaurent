import React from 'react';
import biryani from '../../asset/biryani.png';
import bossions from '../../asset/boissons.png';
import dessert from '../../asset/dessert.png';
import entrees from '../../asset/entree.png';
import menus from '../../asset/menus.png';
import naan from '../../asset/naan.png';
import plats from '../../asset/plats.png';
import vins from '../../asset/vins.png';
import Footer from "../../components/Footer/Footer.jsx";
import Navigation from '../../components/Navigation/Navigation';
import './Menu.css';

const Menu = () => {
    return (
        <div>
    
<Navigation></Navigation>
    <div className="menu-section">

        <div className="breadcrumb ">
            <div className="container text-center">
            <h1 className='breadcrumb-title mt-5'>MENU ITEMS</h1>
            <ul>
                <li className='d-inline'><a href="" >Home</a></li>
                <li className='bread-symbol'><a href="" className='ms-2'>Menu</a></li>
            </ul>
            </div>
        </div>




        {/* le carte section */}

      
   
    </div>

    <div className="lecarte">
            <div className="container">
                <h1 className="lecarte-title">LE CARTE</h1>



                <div className="row gx-1 mt-5 pt-5">
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={naan} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={dessert} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={entrees} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={plats} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={biryani} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={menus} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={bossions} alt="" />
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                       <div className="lecarte-media">
                       <img className='img-fluid' src={vins} alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
        </div>
            
       
    );
};

export default Menu;