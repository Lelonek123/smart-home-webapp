import React from "react";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();

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
                        placeholder="Email"
                        name="email"
                        id="email"
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        id="confirmPassword"
                    ></input>
                </div>

                <div className="formRow">
                    <button>Register</button>
                </div>
                <div className="registerPrompt">
                    <a
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Already have and account?
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Register;
