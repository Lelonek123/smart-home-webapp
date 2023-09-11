import React from "react";
import StatusDot from "components/status/statusDot";

function DeviceStatus(props) {
    const renderContent = () => {
        const rowStyle = {
            backgroundColor: "hsl(222, 100%, 97%)",
            borderRadius: "20px",
            padding: "4px 10px",
        };

        const renderStatusData = () => {
            return (
                <>
                    <div style={rowStyle}>
                        {"Power: "}
                        <div
                            style={{
                                width: "15px",
                                height: "15px",
                                display: "inline-block",
                                margin: "0 5px",
                            }}
                        >
                            <StatusDot
                                active={props.selectedDeviceData.isOnline}
                            />
                        </div>
                        {`${
                            props.selectedDeviceData.isPowered
                                ? "Power outlet"
                                : "Battery"
                        }`}
                    </div>
                    <div style={rowStyle}>
                        {"Alarm: "}
                        <div
                            style={{
                                width: "15px",
                                height: "15px",
                                display: "inline-block",
                                margin: "0 5px",
                            }}
                        >
                            <StatusDot
                                active={props.selectedDeviceData.isOnline}
                            />
                        </div>
                        {props.selectedDeviceData.alarm
                            ? "Enabled"
                            : "Disabled"}
                    </div>
                </>
            );
        };

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "30px",
                    alignItems: "center",
                    padding: "0 30px",
                    justifyContent: "center",
                }}
            >
                <div style={rowStyle}>
                    {`Status:`}
                    <div
                        style={{
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                            margin: "0 5px",
                        }}
                    >
                        <StatusDot active={props.selectedDeviceData.isOnline} />
                    </div>
                    {props.selectedDeviceData.isOnline ? "Online" : "Offline"}
                </div>
                {props.selectedDeviceData.isOnline && renderStatusData()}
            </div>
        );
    };

    return (
        <div
            style={{
                minWidth: "min-content",
                flexGrow: "0",
                border: "2px solid hsl(0, 0%, 94%)",
                flexGrow: "1",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "100px",
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
                    Device Status
                </div>
                <div
                    style={{
                        width: "100%",
                        flexGrow: "1",
                        padding: "25px 0",
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {!props.selectedDevice && <div>No device selected.</div>}
                    {props.selectedDevice &&
                        props.selectedDeviceData &&
                        renderContent()}
                </div>
            </div>
        </div>
    );
}

export default DeviceStatus;
