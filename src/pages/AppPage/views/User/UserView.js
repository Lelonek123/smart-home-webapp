import React from "react";
import ContentWrapper from "components/contentWrapper/contentWrapper.js";
import "./UserView.css";
import { updateUserPassword, updateUserEmail } from "firebase.js";

function UserView(props) {
    // password update form
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmNewPassword, setConfirmNewPassword] = React.useState("");

    // email update form
    const [newEmail, setNewEmail] = React.useState("");
    const [ePassword, setEPassword] = React.useState("");
    const [eEmail, setEEmail] = React.useState("");

    return (
        <ContentWrapper>
            <div className="userPanel">
                <div className="userHeader">Your Account</div>
                <div className="userViewPanel">
                    <form className="updatePasswordForm panelRow">
                        <div className="userFormRow">
                            <label htmlFor="updatePasswordEmail">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                name="email"
                                id="updatePasswordEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <label htmlFor="currentPassword">Password</label>
                            <input
                                type="password"
                                placeholder="Your current password"
                                name="currentPassword"
                                id="currentPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                placeholder="Your new password"
                                name="newPassword"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <label htmlFor="confirmNewPassword">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Your new password"
                                name="confirmNewPassword"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) =>
                                    setConfirmNewPassword(e.target.value)
                                }
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <button
                                className="updatePasswordButton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (newPassword != confirmNewPassword) {
                                        alert(
                                            "Confirm password is not the same as new password!"
                                        );
                                        return;
                                    }
                                    updateUserPassword(
                                        email,
                                        password,
                                        newPassword
                                    );
                                    setEmail("");
                                    setPassword("");
                                    setNewPassword("");
                                    setConfirmNewPassword("");
                                }}
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                    <form className="updateEmail panelRow">
                        <div className="userFormRow">
                            <label htmlFor="updateEmail">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                name="updateEmail"
                                id="updateEmail"
                                value={eEmail}
                                onChange={(e) => setEEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <label htmlFor="ePassword">Password</label>
                            <input
                                type="password"
                                placeholder="Your password"
                                name="ePassword"
                                id="ePassword"
                                value={ePassword}
                                onChange={(e) => setEPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <label htmlFor="newEmail">New Email</label>
                            <input
                                type="email"
                                placeholder="Your new email"
                                name="newEmail"
                                id="newEmail"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="userFormRow">
                            <button
                                className="updateEmailButton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    updateUserEmail(
                                        eEmail,
                                        ePassword,
                                        newEmail
                                    );
                                }}
                            >
                                Update Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default UserView;
