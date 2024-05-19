import { Link } from "react-router-dom";
import React from "react";
import logo from '/Pyraslogo1234.png';

export default function Navbar() {
    return (
            <nav className="nav">
                <Link className="logo" to="/">
                <img src={logo} alt="Logo"/>
                </Link>

                <div className="cent-nav">
                    <Link className="nav-item" to="/"><span>Home</span></Link>
                    <Link className="nav-item" to="/host"><span>Host</span></Link>
                    <Link className="nav-item" to="/rent"><span>Rent</span></Link>
                    <Link className="nav-item" to="/pricing"><span>Pricing</span></Link>
                    <Link className="nav-item" to="/contact"><span>Contact</span></Link>
                </div>
                <div className="login-button-container">
                    <Link className="login-button" to="/login"><span>Login</span><i></i></Link>
                </div>
            </nav>
    );
}
