// components/CartPopup.jsx
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartPopup = () => {
    const { cartPopup } = useContext(CartContext);

    if (!cartPopup) return null;

    return (
        <div className="fixed bottom-16 right-8 bg-white shadow-lg p-4 rounded-lg max-w-xs z-50">
            <h4 className="font-semibold">Added to Cart</h4>
            <div className="flex items-center">
                <img
                    src={`https://yourcdnurl.com/${cartPopup.imageId}`}
                    alt={cartPopup.name}
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                    <p>{cartPopup.name}</p>
                    <p>Quantity: {cartPopup.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CartPopup;
