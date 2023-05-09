import React from "react";
import "./LoginRegister.css";

function Register(props) {
    return (
        <div className="registerForm formWrapper">
            <div className="formHeader">
                <div>REGISTER</div>
            </div>
            <form className="form">
                <div className="formRow">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="confirmPassword">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="confirmPassword"
                        id="confirmPassword"
                    ></input>
                </div>

                <div className="formRow">
                    <button>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
