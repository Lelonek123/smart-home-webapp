import React, { useEffect, useState } from "react";
import ContentWrapper from "components/contentWrapper/contentWrapper.js";
import DeviceSelect from "./deviceSelect/deviceSelect";
import DeviceStatus from "./DeviceStatus/DeviceStatus";
import { socket } from "socketIo.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";

const DeviceStatusWrapper = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                height: "fit-content",
                gap: "20px",
            }}
        >
            {props.children}
        </div>
    );
};

function Dashboard(props) {
    const [user, loading, error] = useAuthState(auth);

    const [selectedDevice, setSelectedDevice] = useState(null);

    return (
        <ContentWrapper>
            <DeviceStatusWrapper>
                <DeviceSelect
                    devices={props.devices}
                    onSelect={(id, name) => {
                        socket.emit("update-drivers", {
                            action: "add",
                            mac_addr: id,
                            name: name,
                            uid: user.uid,
                        });
                    }}
                    isLoading={props.isLoading}
                ></DeviceSelect>
                <DeviceStatus></DeviceStatus>
            </DeviceStatusWrapper>
        </ContentWrapper>
    );
}

export default Dashboard;
