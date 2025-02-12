import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../data";
import CartContext from "../context/CartContext";
import KitchenIcon from '@mui/icons-material/Kitchen';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ContactsIcon from '@mui/icons-material/Contacts';
const Header = () => {
    const { cart } = useContext(CartContext); 
    const [btnName, setBtnName] = useState("Login"); 

    return (
        <header className="header flex justify-between items-center bg-white p-4 shadow-md">
         
            <Link to="/">
                <img className="logo w-20" src={LOGO_URL} alt="App Logo" />


            </Link>

            <nav className="flex items-center">

                <ul className="flex space-x-6 text-gray-700">  <li>
                        <Link to="/" className="hover:text-orange-500 transition">
                            <KitchenIcon /> Home
                        </Link>
                    </li>
                    <li> <Link to="/about" className="hover:text-orange-500 transition">
                           <BorderColorIcon /> About
                        </Link></li>
                    <li>
                        <Link to="/contacts" className="hover:text-orange-500 transition">
                      <ContactsIcon />      Contacts
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-orange-500 transition">
                 <ShoppingCartCheckoutIcon />    Cart ({cart.length})
                        </Link>
                    </li>
                </ul>

            
                
            </nav>
        </header>
    );
};

export default Header;
