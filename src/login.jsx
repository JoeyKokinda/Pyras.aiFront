import React from "react";
import Navbar from "./navbar";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="login-bubble">
                    <form>
                        <label>
                            <input type="text" name="username" placeholder="Username" />
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Password" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
