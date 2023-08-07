import React from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase.js";
import UserView from "./views/User/UserView";
import Dashboard from "./views/Dashboard/Dashboard";
import "./AppPage.css";
import SideMenu from "components/SideMenu/SideMenu.js";
import UserIcon from "components/SvgIcons/UserIcon.js";
import HomeIcon from "components/SvgIcons/HomeIcon.js";
import { socket } from "socketIo.js";

function AppPage(props) {
    let navigate = useNavigate();
    const [view, setView] = React.useState("dashboard");
    const [user, loading, error] = useAuthState(auth);
    const [drivers, setDrivers] = React.useState([]);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/login");
        } else {
            socket.on("connect", () => {
                socket.emit("get-drivers", user.uid, (response) => {
                    if (response.status == "OK") {
                        setDrivers(response.drivers);
                    }
                });
            });
            socket.connect();
        }
    }, [user, loading]);

    return (
        <div className="appFlexContainer">
            <SideMenu>
                <button
                    activeText="Your account"
                    onClick={() => {
                        setView("user");
                    }}
                >
                    <div className="svg">
                        <UserIcon></UserIcon>
                    </div>
                </button>
                <button
                    activeText="Dashboard"
                    onClick={() => {
                        setView("dashboard");
                    }}
                >
                    <div className="svg">
                        <HomeIcon></HomeIcon>
                    </div>
                </button>
            </SideMenu>
            <div className="mainContent">
                {view == "dashboard" ? (
                    <Dashboard></Dashboard>
                ) : (
                    <UserView></UserView>
                )}
            </div>
        </div>
    );
}

export default AppPage;
