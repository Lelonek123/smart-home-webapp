import React from "react";
import "./LoginRegister.css";

function LoginForm(props) {
    return (
        <div className="loginForm formWrapper">
            <div className="formHeader">
                <div>USER LOGIN</div>
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
                    <div className="flex">
                        <div className="rememberMeWrapper">
                            <label htmlFor="rememberMe">Remember Me</label>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                className="checkbox"
                            ></input>
                        </div>
                        <div className="forgotPassword">
                            <a href="/">Forgot your password?</a>
                        </div>
                    </div>
                </div>
                <div className="formRow">
                    <button>Log in</button>
                </div>
                <a className="registerPrompt">Don't have and account yet?</a>
            </form>
        </div>
    );
}

export default LoginForm;
