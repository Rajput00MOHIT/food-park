import React, { useContext } from "react";

import { CDN_URL } from "../data";
import CartContext from "../context/CartContext";


const MenuItem = ({ item }) => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img
                className="w-full h-40 object-cover rounded-md mb-4"
                src={`${CDN_URL}${item.imageId}`}
                alt={item.name}
            />
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-gray-600">
                ₹ {item.price / 100 || item.defaultPrice / 100}
            </p>
            <button
                onClick={handleAddToCart}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default MenuItem;
