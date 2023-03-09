import { useState } from "react";

const Title = () => (
    // <a href"/": If we click our logo it wiil redirect us to home page
        <a href="/">    
        <img
        className="logo"
        alt="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
        </a>
    );

   const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
        return (
        <div className="header">
             <Title />
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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