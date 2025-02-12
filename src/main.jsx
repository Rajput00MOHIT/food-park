import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import  { appRouter } from './App.jsx';
import RestaurantProvider from './context/RestaurantContext.jsx';
import { CartProvider } from './context/CartContext.jsx';



createRoot(document.getElementById('root')).render(
  <RestaurantProvider>
      <CartProvider>
    <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
  </CartProvider>
  
</RestaurantProvider>
);
