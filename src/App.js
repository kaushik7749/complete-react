import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


/**
Header
      -logo
      -nav items
      -cart
Body 
      -search bar
      -restaurant list
        -restaurant card
            -image
            -name
            -rating
            -cuisines
Footer
      -links
      -copyrights
 * 
 */



const AppLayout = () => {
    return (
        <>
        <Header />  
        <Outlet />
        <Footer />
        </>
    );
};

//creating a router
//My createBrowserRouter takes configuration array i.e list of path and each path is abj
//we have a path which takes exactly what url(localhost:1234/about) it will take
const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
            //In url I am loading element About which came from About.js comp
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ]
    },
   
   
]);



const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(<RouterProvider router={appRouter} />); //Tis is how we render about page
