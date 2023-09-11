import React from "react";
import TilesWrapper from "./pTilesWrapper";

export default function SettingsPopup(props) {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "100vh",
                width: "100%",
                zIndex: "1000",
                backgroundColor: "hsla(0, 0%, 0%, 0.8)",
            }}
        >
            <div
                style={{
                    top: "5%",
                    left: "calc(50%)",
                    transform: "translateX(-50%)",
                    position: "absolute",
                    width: "90%",
                    maxWidth: "500px",
                    height: "fit-content",
                    maxHeight: "90%",
                    backgroundColor: "white",
                    border: "2px solid hsl(0, 0%, 74%)",
                }}
            >
                <TilesWrapper
                    title={props.title}
                    fontSize={26}
                    closeButtonContent={"X"}
                    onClick={props.onClose}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            padding: "15px",
                            gap: "20px",
                        }}
                    >
                        {props.children}
                    </div>
                </TilesWrapper>
            </div>
        </div>
    );
}
