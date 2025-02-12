// components/Cart.jsx
import React, { useContext } from "react";

import { CDN_URL } from "../data";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    };

    const getTotalPrice = () =>
        cart.reduce(
            (total, item) => total + item.quantity * (item.price || item.defaultPrice) / 100,
            0
        );

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-semibold">Your cart is empty</h1>
                <p className="text-gray-600 mt-2">Add some items to see them here!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
            <div className="grid gap-6">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
                    >
                        <img
                            className="w-24 h-24 object-cover rounded-md"
                            src={`${CDN_URL}${item.imageId}`}
                            alt={item.name}
                        />
                        <div className="flex-1 px-4">
                            <h3 className="text-lg font-medium">{item.name}</h3>
                            <p className="text-gray-600">
                                ₹ {item.price / 100 || item.defaultPrice / 100}
                            </p>
                            <div className="mt-2 flex items-center">
                                <button
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 bg-gray-300 rounded-md"
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 bg-gray-300 rounded-md"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-lg font-bold">Total: ₹ {getTotalPrice()}</h2>

                <Link className=" border-lg black center bg-orange-700 text-white px-4 py-2 rounded-lg w-[10px] ml-[600px] " to={'/cart/restaurant/order'}>Order </Link>
            </div>
        </div>
    );
};

export default Cart;
