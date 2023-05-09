import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./CssRoot.css";
import AppPage from "./pages/AppPage/AppPage.js";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>,
    },
    {
        path: "/app",
        element: <AppPage></AppPage>,
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
    },
]);

function App() {
    const [isAuth, setIsAuth] = React.useState(false);

    return (
        <div className="App">
            <RouterProvider router={router} />
            <button
                onClick={() => {
                    setIsAuth(!isAuth);
                }}
            >
                login
            </button>
        </div>
    );
}

export default App;
