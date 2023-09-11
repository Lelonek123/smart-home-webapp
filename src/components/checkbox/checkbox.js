import React, { useState } from "react";

export default function Checkbox(props) {
    return (
        <div
            onClick={() => {
                props.onChange?.();
            }}
            style={{
                width: "60px",
                height: "30px",
                borderRadius: "30px",
                backgroundColor: props.checked ? "green" : "red",
                transition: "background-color 150ms",
                position: "relative",
            }}
        >
            <div
                style={{
                    aspectRatio: "1 / 1",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "hsl(0, 0%, 96%)",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%) scale(.7)",
                    left: props.checked ? "calc(100% - 30px)" : "0",
                    transition: "left 150ms",
                }}
            ></div>
        </div>
    );
}
