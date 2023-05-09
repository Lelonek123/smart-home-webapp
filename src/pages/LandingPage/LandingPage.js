import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow.js";
import "./LandingPage.css";
import LoginForm from "../../components/LoginForm/LoginForm.js";
import RegisterForm from "../../components/LoginForm/RegisterForm.js";
import { useNavigate } from "react-router-dom";

//landing page with login/register panels

function LandingPage(props) {
    let navigate = useNavigate();

    return (
        <div className="fullScreenContainer">
            <div className="logRegButtonWrapper">
                <button
                    className="loginButton"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Login
                </button>
                <button
                    className="registerButton"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
