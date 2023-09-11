import React from "react";

export default function StatusDot(props) {
    return (
        <div
            style={{
                borderRadius: "50%",
                height: "100%",
                width: "100%",
                backgroundColor: props.active ? "green" : "red",
                border: "1px solid black",
            }}
        ></div>
    );
}
