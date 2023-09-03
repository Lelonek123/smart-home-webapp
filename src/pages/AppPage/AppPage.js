import React, { useState } from "react";
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

const drivers = [
    { mac_addr: "22:22:22:22", name: "home" },
    { mac_addr: "11:11:11:11", name: "home2" },
];

function AppPage(props) {
    let navigate = useNavigate();
    const [view, setView] = React.useState("dashboard");
    const [user, loading, error] = useAuthState(auth);
    const [devices, setDevices] = React.useState(null);
    const [devicesLoading, setDevicesLoading] = React.useState(true);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [deviceState, setDeviceState] = useState(null);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/login");
        } else {
            // socket.on("connect", () => {
            //     socket.emit("get-drivers", user.uid, (response) => {
            //         if (response.status == "OK") {
            //             console.log(response.drivers);
            //             setDevices(response.drivers);
            //             setDevicesLoading(false);
            //         }
            //     });
            // });
            // socket.connect();

            setDevices(drivers);
            setDevicesLoading(false);
        }
    }, [user, loading]);

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <div className="appFlexContainer">
            <SideMenu>
                <button
                    activeText="Your account"
                    onClick={() => {
                        setView("user");
                    }}
                    key={"user"}
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
                    key={"dashboard"}
                >
                    <div className="svg">
                        <HomeIcon></HomeIcon>
                    </div>
                </button>
            </SideMenu>
            <div className="mainContent">
                {view == "dashboard" ? (
                    <Dashboard
                        devices={devices}
                        isLoading={devicesLoading}
                        updateDevices={(devices) => setDevices(devices)}
                    ></Dashboard>
                ) : (
                    <UserView></UserView>
                )}
            </div>
        </div>
    );
}

export default AppPage;
