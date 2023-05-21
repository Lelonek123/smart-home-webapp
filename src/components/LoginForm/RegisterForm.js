import React from "react";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Register(props) {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/app");
        }
    }, [user, loading]);

    const registerHandler = () => {
        if (password == confirmPassword) {
            registerWithEmailAndPassword(email, password);
        } else {
            alert("Passwords must be the same");
        }
    };

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="formRow">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>

                <div className="formRow">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            registerHandler();
                        }}
                    >
                        Register
                    </button>
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
