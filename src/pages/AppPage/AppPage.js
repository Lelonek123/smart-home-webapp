import React from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase.js";
import UserView from "./views/User/UserView";
import Dashboard from "./views/Dashboard/Dashboard";
import "./AppPage.css";
import SideMenu from "components/SideMenu/SideMenu.js";

function AppPage(props) {
    let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/login");
        }
    }, [user, loading]);

    return (
        <div className="appFlexContainer">
            <SideMenu></SideMenu>
            <div className="mainContent">
                <Dashboard></Dashboard>
            </div>
            <button
                onClick={() => {
                    logout();
                }}
            >
                Log out
            </button>
        </div>
    );
}

export default AppPage;
