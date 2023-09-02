import React, { useEffect, useState } from "react";
import ContentWrapper from "components/contentWrapper/contentWrapper.js";
import DeviceSelect from "./deviceSelect/deviceSelect";
import DeviceStatus from "./DeviceStatus/DeviceStatus";

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
    const [selectedDevice, setSelectedDevice] = useState(null);

    return (
        <ContentWrapper>
            <DeviceStatusWrapper>
                <DeviceSelect
                    devices={props.devices}
                    onSelect={(id) => selectedDevice(id)}
                    isLoading={props.isLoading}
                    updateDevices={props.updateDevices}
                    selectedDevice={selectedDevice}
                ></DeviceSelect>
                <DeviceStatus></DeviceStatus>
            </DeviceStatusWrapper>
        </ContentWrapper>
    );
}

export default Dashboard;
