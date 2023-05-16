import React from "react";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    setPersistence,
    browserSessionPersistence,
    browserLocalPersistence,
} from "firebase/auth";

function LoginForm(props) {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);
    const [user, loading, error] = useAuthState(auth);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/app");
        }
    }, [user, loading]);

    const loginHandler = () => {
        setPersistence(
            auth,
            rememberMe ? browserLocalPersistence : browserSessionPersistence
        )
            .then(() => {
                logInWithEmailAndPassword(email, password);
            })
            .catch((err) => {
                console.error(err);
                alert(err.message);
            });
    };

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                                id="rememberMe"
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                            ></input>
                        </div>
                        <div className="forgotPassword">
                            <a>Forgot your password?</a>
                        </div>
                    </div>
                </div>
                <div className="formRow">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            loginHandler();
                        }}
                    >
                        Log in
                    </button>
                </div>
                <div className="registerPrompt">
                    <a
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Don't have and account yet?
                    </a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
