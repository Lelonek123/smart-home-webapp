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

const devicesData = {
    "22:22:22:22": {
        mac_addr: "22:22:22:2",
        status: "online",
        peripherals: [
            {
                name: "lampa",
                id: "3123123",
                type: "light",
                params: ["rgb", "brightness"],
            },
            { name: "brama", id: "31231231233", type: "garage_gate" },
        ],
        peripherals_state: {
            3123123: {
                type: "light",
                params: ["rgb", "brightness"],
                on: true,
                rgb: 0xffffff,
                brightness: 100,
            },
            31231231233: {
                type: "garage_gate",
                open: false,
            },
        },
        device_state: {
            battery: 100,
            power: "power outlet",
        },
    },
    "11:11:11:11": {
        mac_addr: "11:11:11:11",
        status: "offline",
    },
};

function Dashboard(props) {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [selectedDeviceData, setSelectedDeviceData] = useState(null);

    return (
        <ContentWrapper>
            <DeviceStatusWrapper>
                <DeviceSelect
                    devices={props.devices}
                    onSelect={(id) => {
                        setSelectedDevice(id);
                        setSelectedDeviceData(devicesData[id]);
                    }}
                    isLoading={props.isLoading}
                    updateDevices={props.updateDevices}
                    selectedDevice={selectedDevice}
                ></DeviceSelect>
                <DeviceStatus
                    selectedDevice={selectedDevice}
                    selectedDeviceData={selectedDeviceData}
                ></DeviceStatus>
            </DeviceStatusWrapper>
        </ContentWrapper>
    );
}

export default Dashboard;
