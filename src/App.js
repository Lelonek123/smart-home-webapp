import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./CssRoot.css";
import AppPage from "./pages/AppPage/AppPage.js";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/app" element={<AppPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
