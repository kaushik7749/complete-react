import { useState } from "react";
import Logo from "../assets/img/FoodVilla.png";
import {Link} from "react-router-dom";

//Single page application




const Title = () => (
    // <a href"/": If we click our logo it wiil redirect us to home page
        <a href="/">    
        <img
        className="h-28 p-2"
        alt="logo" src={Logo}/>
        </a>
    );

   const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
        return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
             <Title />
           <div className="nav-items">
            <ul className="flex">
                <li className="px-2">
                <Link to="/">Home</Link>
                </li>
                <li className="px-2">
                <Link to="/about">About</Link>
                </li>
                <li className="px-2">
                <Link to="/contact">Contact</Link>
                </li>
                <li className="px-2">
                <Link to="/instamart">Instamart</Link>
                </li>
                <li>Cart</li>
            </ul>
           </div>
           {
            isLoggedIn ? (<button onClick={() => {  //We will toggle login and logout button
                setLoggedIn(false);
            }}>Logout</button>
            ) : ( <button onClick={() => {
                setLoggedIn(true);
            }}>Login</button>
          ) }
        </div>
        );
    };
    
    export default Header;