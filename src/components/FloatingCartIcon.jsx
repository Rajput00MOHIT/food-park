// components/FloatingCartIcon.jsx
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const FloatingCartIcon = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="fixed bottom-8 right-8 bg-orange-500 p-4 rounded-full shadow-lg z-50">
            <FaShoppingCart size={24} color="white" />
            {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};

export default FloatingCartIcon;
