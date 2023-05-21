import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";



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

    const About = lazy(() => import("./components/About"));
      const Instamart = lazy(() => import("./components/Instamart")); //promise


const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Kaushik Yadure",
        email: "kaushikyadure@gmail.com"
    });



    return (
        <UserContext.Provider value ={{
            user: user,
        }}
        >
        <Header />  
        <Outlet />
        <Footer />
        </UserContext.Provider>
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
                path: "/about",
            //In url I am loading element About which came from About.js comp
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
                children: [
                    {
                    path: "profile",
                    element: <Profile />,
                    },
                ],
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
            },
        ]
    },
   
   
]);



const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(<RouterProvider router={appRouter} />); //Tis is how we render about page
