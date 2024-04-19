import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =() => {

    let [loginBtn , setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img src = { LOGO_URL } className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/AboutUs">About Us</Link></li>
                <li><Link to ="/Contact">Contact Us</Link></li>
                <li> Cart</li>
                <button className="login" onClick={()=> {
                    loginBtn === "Login"? setLoginBtn ("Logout"):setLoginBtn ("Login");
                }}> {loginBtn} </button>
                </ul>
            </div>

        </div>
    )
};

export default Header;
