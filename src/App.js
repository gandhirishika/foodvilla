import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; //named components
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import {Provider} from 'react-redux'
import store from "./utils/store";



const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
      <Header />
      <Outlet/>
      <Footer />
      </Provider>
      
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);
export default AppLayout;
