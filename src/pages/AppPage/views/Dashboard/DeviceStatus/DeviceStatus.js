import React from "react";

function DeviceStatus(props) {
    return (
        <div
            style={{
                minWidth: "min-content",
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
                    Content
                </div>
            </div>
        </div>
    );
}

export default DeviceStatus;
