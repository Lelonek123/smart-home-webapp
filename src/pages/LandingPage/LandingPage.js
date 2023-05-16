import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow.js";
import "./LandingPage.css";
import LoginForm from "../../components/LoginForm/LoginForm.js";
import RegisterForm from "../../components/LoginForm/RegisterForm.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.js";

//landing page with login/register panels

function LandingPage(props) {
    let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/app");
        }
    }, [user, loading]);

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
