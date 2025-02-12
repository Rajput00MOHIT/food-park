import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contacts from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import OrderProcess from './components/OrderProcess';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';


const Layout = () => (
  <div className="app">
      <CartProvider>
    <Header />
    <Outlet /> 
    </CartProvider>
  </div>
);


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:resId", 
        element: <RestaurantMenu />,
      },
      {
        path: "/cart/restaurant/order", 
        element: <OrderProcess />,
      },
      {
        path: "/cart", 
        element: <Cart />,
      },
     
    ],
    errorElement: <Error />, 
  },
]);


const App = () => (
  <RouterProvider router={appRouter} />
);

export default App;
