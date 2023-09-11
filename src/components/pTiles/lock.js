import React, { useEffect, useState } from "react";
import Checkbox from "components/checkbox/checkbox";
import TilesWrapper from "./pTilesWrapper";
import SettingsPopup from "./settingsPopup";
import StatusDot from "components/status/statusDot";

export default function Lock(props) {
    const [settingsActive, setSettingsActive] = useState(false);
    const [newState, setNewState] = useState(props.state);
    const [newName, setNewName] = useState(props.name);
    const [nameInput, setNameInput] = useState(props.name);
    const [editName, setEditName] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [enableCountdown, setEnableCountdown] = useState(false);

    useEffect(() => {
        if (enableCountdown && countdown > 0) {
            setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else {
            setEnableCountdown(false);
        }
    });

    return (
        <TilesWrapper title={"Lock"} onClick={() => setSettingsActive(true)}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{ marginBottom: "5px" }}
                >{`Name: ${props.name}`}</div>
                <div style={{ marginBottom: "15px" }}>{`ID: ${props.id}`}</div>
                <div style={{ marginBottom: "15px" }}>
                    {`Status: ${props.state.open ? "Unlocked " : "Locked "}`}
                    <div
                        style={{
                            height: "15px",
                            width: "15px",
                            display: "inline-block",
                        }}
                    >
                        <StatusDot active={props.state.open}></StatusDot>
                    </div>
                    {props.state.open && ` ${countdown}s`}
                </div>
                <button
                    disabled={props.state.open}
                    onClick={() => {
                        let newState = { ...props.state };
                        newState.open = true;
                        props.setState(newState);

                        setEnableCountdown(true);
                        setCountdown(props.state.timeout);

                        setTimeout(() => {
                            let newState = { ...props.state };
                            newState.open = false;
                            props.setState(newState);
                        }, props.state.timeout * 1000);
                    }}
                >
                    Unlock
                </button>
            </div>
            {settingsActive && (
                <SettingsPopup
                    title={"Lock settings"}
                    onClose={() => {
                        setSettingsActive(false);
                        setNewState(props.state);
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        <div>
                            {!editName && `Name: ${newName}`}
                            {!editName && (
                                <button
                                    style={{ marginLeft: "5px" }}
                                    onClick={() => setEditName(true)}
                                >
                                    *
                                </button>
                            )}
                            {editName && (
                                <>
                                    <div>
                                        {`Name: `}
                                        <input
                                            type="text"
                                            value={nameInput}
                                            onChange={(e) =>
                                                setNameInput(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            marginTop: "7px",
                                            gap: "10px",
                                        }}
                                    >
                                        <button
                                            onClick={() => {
                                                setEditName(false);
                                                setNewName(nameInput);
                                            }}
                                        >
                                            Apply
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditName(false);
                                                setNameInput(newName);
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                        <div>{`ID: ${props.id}`}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                            flexGrow: "1",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <label
                                htmlFor="color"
                                style={{ marginRight: "20px" }}
                            >
                                Change timeout:
                            </label>
                            <input
                                id="color"
                                type="number"
                                min="3"
                                max="15"
                                value={newState.timeout}
                                onChange={(e) => {
                                    const newS = { ...newState };
                                    newS.timeout = e.target.value;
                                    setNewState(newS);
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                            flexGrow: "1",
                        }}
                    ></div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        <button
                            onClick={() => {
                                if (props.state != newState) {
                                    props.setState(newState);
                                }
                                if (props.name != newName) {
                                    props.setName(newName);
                                }
                                setSettingsActive(false);
                            }}
                        >
                            Apply
                        </button>
                        <button
                            onClick={() => {
                                setSettingsActive(false);
                                setNewState(props.state);
                                setNewName(props.name);
                                setNameInput(props.name);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </SettingsPopup>
            )}
        </TilesWrapper>
    );
}
