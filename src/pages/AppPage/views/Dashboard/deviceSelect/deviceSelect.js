import React, { useEffect, useState } from "react";
import "./deviceSelect.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";
import { socket } from "socketIo.js";

function DeviceSelect(props) {
    const [showAddDevice, setShowAddDevice] = useState(false);
    const [addNameValue, setAddNameValue] = useState("");
    const [addId, setAddId] = useState("");
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (props.isLoading) {
            return;
        }
    }, [props.isLoading]);

    const renderDeviceSelect = () => {
        return (
            <div
                style={{
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0 5px",
                }}
            >
                {props.devices && props.devices.length > 0 ? (
                    <select
                        onChange={(e) => {
                            props.onSelect(e.target.value);
                        }}
                        style={{
                            flexGrow: "1",
                            height: "40px",
                            paddingLeft: "14px",
                        }}
                        defaultValue={""}
                    >
                        <option hidden value={""}>
                            Select device
                        </option>
                        {props.devices?.map((device, i) => {
                            return (
                                <option
                                    value={device.mac_addr}
                                    key={device.mac_addr}
                                >{`${device.name || device.mac_addr}`}</option>
                            );
                        })}
                    </select>
                ) : (
                    <div
                        style={{
                            flexGrow: "1",
                        }}
                    >
                        You don't have any devices yet. Click plus button to add
                        one.
                    </div>
                )}
                <button
                    style={{
                        marginLeft: "20px",
                        height: "50px",
                        width: "50px",
                        flexShrink: "0",
                        fontSize: "30px",
                    }}
                    onClick={() => {
                        setShowAddDevice(true);
                    }}
                >
                    <div>+</div>
                </button>
            </div>
        );
    };

    const renderAddDevice = () => {
        return (
            <div
                style={{
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // borderTop: "1px solid hsl(0, 0%, 94%)",
                    paddingTop: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        maxWidth: "100%",
                        width: "fit-content",
                        gap: "10px",
                    }}
                >
                    <div className="device-input-wrapper">
                        <label htmlFor="deviceId">Device ID</label>
                        <input
                            type="text"
                            id="deviceId"
                            placeholder="Device ID"
                            onInput={(e) => setAddId(e.target.value)}
                        />
                    </div>
                    <div className="device-input-wrapper">
                        <label htmlFor="alias">Device alias</label>
                        <input
                            type="text"
                            id="alias"
                            placeholder="Alias"
                            onInput={(e) => setAddNameValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="device-input-buttons-wrapper">
                    <button
                        onClick={socket.emit("update-drivers", {
                            action: "add",
                            mac_addr: addId,
                            name: setAddNameValue,
                            uid: user.uid,
                        })}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => {
                            setAddNameValue("");
                            setAddId("");
                            setShowAddDevice(false);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div
            style={{
                flexGrow: "1",
                height: "fit-content",
                border: "2px solid hsl(0, 0%, 94%)",
                position: "relative",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100px",
                    alignItems: "center",
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
                    Select Your Device
                </div>
                <div
                    style={{
                        width: "100%",
                        flexGrow: "1",
                        padding: "25px 0",
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    {props.isLoading && (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            Loading
                        </div>
                    )}
                    {!props.isLoading && renderDeviceSelect()}
                    {showAddDevice && renderAddDevice()}
                </div>
            </div>
        </div>
    );
}

export default DeviceSelect;
