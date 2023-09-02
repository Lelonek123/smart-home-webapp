import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
    sendEmailVerification,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
    updateEmail,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeaQMw1grAMcS8gqrDWS-n1Mpy6MIZZ4A",
    authDomain: "smart-home-33c9b.firebaseapp.com",
    projectId: "smart-home-33c9b",
    storageBucket: "smart-home-33c9b.appspot.com",
    messagingSenderId: "687857113273",
    appId: "1:687857113273:web:75822c20534b0b92ae2368",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const updateUserEmail = async (email, password, newEmail) => {
    try {
        const credential = EmailAuthProvider.credential(email, password);
        await reauthenticateWithCredential(auth.currentUser, credential).then(
            () => {
                updateEmail(auth.currentUser, newEmail);
                alert("Email updated succesfully!");
            },
        );
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const updateUserPassword = async (email, password, newPassword) => {
    try {
        const credential = EmailAuthProvider.credential(email, password);
        await reauthenticateWithCredential(auth.currentUser, credential).then(
            () => {
                updatePassword(auth.currentUser, newPassword);
                alert("Password updated succesfully!");
            },
        );
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await updateProfile(user, { displayName: email })
            .then()
            .catch((err) => {
                alert(`Failed to update displaynema (Error ${err})`);
            });
        sendEmailVerification(user)
            .then()
            .catch(() => {
                alert("Failed to send verification email");
            });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    updateUserPassword,
    updateUserEmail,
};
