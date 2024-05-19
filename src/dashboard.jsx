import React from "react";
import "./dashboard.css";
import Sidebar from "./sidebar";



const Dashboard = () => {
    return (
    <div className="home-page">
        <Sidebar />
        <div className="section1">
            <div className="container">
                <div className="Text">
                    <h1 className="title">Cut Costs, Not Corners</h1>
                    <p>Top-Tier GPUs Available to Rent or Host.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="secButton1">Get Started</button>
                </div>
                <div className="Pyrmid">
                    <img src="/Templeiconnoborder.png" alt="Pyras Temple" />
                </div>       
            </div>
        </div>
    </div>

    );
};

export default Dashboard;