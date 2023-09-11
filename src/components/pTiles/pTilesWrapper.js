import React from "react";

export default function TilesWrapper(props) {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "hsl(223, 56%, 40%)",
                        color: "white",
                        fontSize: props.fontSize ? props.fontSize : "16px",
                        textAlign: "center",
                        padding: "5px 0",
                    }}
                >
                    {props.title}
                </div>
                <button
                    style={{
                        aspectRatio: "1 / 1",
                        height: "70%",
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                    onClick={() => props.onClick()}
                >
                    {props.closeButtonContent || "*"}
                </button>
            </div>
            {props.children}
        </div>
    );
}
