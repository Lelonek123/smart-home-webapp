import React, { useEffect, useState } from "react";
import ContentWrapper from "components/contentWrapper/contentWrapper";
import DeviceSelect from "./deviceSelect/deviceSelect";
import DeviceStatus from "./DeviceStatus/DeviceStatus";
import LightRgbTile from "components/pTiles/lightRgb";
import LightTile from "components/pTiles/light";
import GarageGate from "components/pTiles/garageGate";
import Lock from "components/pTiles/lock";
import { socket } from "socketIo";

const devicesData = {
    "22:22:22:22": {
        mac_addr: "22:22:22:22",
        isOnline: true,
        isPowered: true,
        alarm: true,
        peripherals: [
            {
                name: "lampargb",
                id: "lampa3123123",
                type: "light_rgb",
            },
            { name: "brama", id: "brama31231231233", type: "garage_gate" },
            { name: "lampka", id: "lampka231312", type: "light" },
            { name: "zamek", id: "zamek231312", type: "lock" },
        ],
        peripherals_state: {
            lampa3123123: {
                on: true,
                rgb: "#222225",
            },
            brama31231231233: {
                open: false,
            },
            lampka231312: {
                on: false,
            },
            zamek231312: {
                open: false,
                timeout: 5,
            },
        },
    },
    "11:11:11:11": {
        mac_addr: "11:11:11:11",
        isOnline: false,
    },
};

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

const PeripheralsGrid = (props) => {
    return (
        <div
            style={{
                marginTop: "25px",
                minWidth: "min-content",
                flexGrow: "0",
                border: "2px solid hsl(0, 0%, 94%)",
                flexGrow: "0",
                width: "100%",
            }}
        >
            <div
                style={{
                    width: "100%",
                    backgroundColor: "hsl(223, 56%, 40%)",
                    color: "white",
                    fontSize: "28px",
                    textAlign: "center",
                    padding: "5px 0",
                }}
            >
                Peripherals
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "20px",
                    padding: "20px",
                    justifyContent: "center",
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

function Dashboard(props) {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [selectedDeviceData, setSelectedDeviceData] = useState(null);

    const tileStyle = {
        minWidth: "200px",
        maxWidth: "300px",
        height: "200px",
        flexGrow: "1",
        border: "1px solid hsl(0, 0%, 94%)",
    };

    const updateState = (newData, id) => {
        socket.emit(
            "update-state",
            {
                id: id,
                newState: newData,
            },
            (response) => {
                if (response.status == "OK") {
                    setSelectedDeviceData(newData);
                }
            },
        );
    };

    return (
        <ContentWrapper>
            <DeviceStatusWrapper>
                <DeviceSelect
                    devices={props.devices}
                    onSelect={(id) => {
                        socket.emit("select-device", { id: id }, (response) => {
                            if (response.status == "OK") {
                                setSelectedDevice(id);
                                setSelectedDeviceData({ ...response.state });
                            }
                        });
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
            {selectedDevice && selectedDeviceData.isOnline && (
                <PeripheralsGrid>
                    {selectedDeviceData.peripherals.map((p) => {
                        switch (p.type) {
                            case "light":
                                return (
                                    <div style={tileStyle} key={p.id}>
                                        <LightTile
                                            name={p.name}
                                            id={p.id}
                                            state={
                                                selectedDeviceData
                                                    .peripherals_state[p.id]
                                            }
                                            setState={(newState) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals_state[
                                                    p.id
                                                ] = newState;

                                                updateState(newData, id);
                                            }}
                                            setName={(newName) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals[
                                                    newData.peripherals.findIndex(
                                                        (e) => e.id == p.id,
                                                    )
                                                ].name = newName;

                                                updateState(newData, id);
                                            }}
                                        ></LightTile>
                                    </div>
                                );
                                break;
                            case "garage_gate":
                                return (
                                    <div style={tileStyle} key={p.id}>
                                        <GarageGate
                                            name={p.name}
                                            id={p.id}
                                            state={
                                                selectedDeviceData
                                                    .peripherals_state[p.id]
                                            }
                                            setState={(newState) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals_state[
                                                    p.id
                                                ] = newState;

                                                updateState(newData, id);
                                            }}
                                            setName={(newName) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals[
                                                    newData.peripherals.findIndex(
                                                        (e) => e.id == p.id,
                                                    )
                                                ].name = newName;

                                                updateState(newData, id);
                                            }}
                                        ></GarageGate>
                                    </div>
                                );
                                break;
                            case "light_rgb":
                                return (
                                    <div style={tileStyle} key={p.id}>
                                        <LightRgbTile
                                            name={p.name}
                                            id={p.id}
                                            state={
                                                selectedDeviceData
                                                    .peripherals_state[p.id]
                                            }
                                            setState={(newState) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals_state[
                                                    p.id
                                                ] = newState;

                                                updateState(newData, id);
                                            }}
                                            setName={(newName) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals[
                                                    newData.peripherals.findIndex(
                                                        (e) => e.id == p.id,
                                                    )
                                                ].name = newName;

                                                updateState(newData, id);
                                            }}
                                        ></LightRgbTile>
                                    </div>
                                );
                                break;
                            case "lock":
                                return (
                                    <div style={tileStyle} key={p.id}>
                                        <Lock
                                            name={p.name}
                                            id={p.id}
                                            state={
                                                selectedDeviceData
                                                    .peripherals_state[p.id]
                                            }
                                            setState={(newState) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals_state[
                                                    p.id
                                                ] = newState;

                                                updateState(newData, id);
                                            }}
                                            setName={(newName) => {
                                                let newData = {
                                                    ...selectedDeviceData,
                                                };
                                                newData.peripherals[
                                                    newData.peripherals.findIndex(
                                                        (e) => e.id == p.id,
                                                    )
                                                ].name = newName;

                                                updateState(newData, id);
                                            }}
                                        ></Lock>
                                    </div>
                                );
                                break;
                        }
                    })}
                </PeripheralsGrid>
            )}
        </ContentWrapper>
    );
}

export default Dashboard;
