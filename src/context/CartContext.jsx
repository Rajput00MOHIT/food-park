// context/CartContext.jsx
import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return state.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);
        case "UPDATE_QUANTITY":
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const [cartPopup, setCartPopup] = React.useState(null); // Track popup state

    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
        setCartPopup(item); // Show popup for added item
        setTimeout(() => setCartPopup(null), 3000); // Hide after 3 seconds
    };

    return (
        <CartContext.Provider value={{ cart, dispatch, addToCart, cartPopup }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
