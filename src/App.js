import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


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
        <Body />
        <Footer />
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(<AppLayout />);   //This is how we render functional component