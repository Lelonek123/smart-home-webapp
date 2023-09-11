import React, { useEffect, useState } from "react";
import Checkbox from "components/checkbox/checkbox";
import TilesWrapper from "./pTilesWrapper";
import SettingsPopup from "./settingsPopup";

export default function LightRgbTile(props) {
    const [settingsActive, setSettingsActive] = useState(false);
    const [newState, setNewState] = useState(props.state);
    const [newName, setNewName] = useState(props.name);
    const [nameInput, setNameInput] = useState(props.name);
    const [editName, setEditName] = useState(false);

    return (
        <TilesWrapper
            title={"RGB Light"}
            onClick={() => setSettingsActive(true)}
        >
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
                <Checkbox
                    checked={props.state.on}
                    onChange={() => {
                        let newState = { ...props.state };
                        newState.on = !props.state.on;
                        props.setState(newState);
                    }}
                ></Checkbox>
            </div>
            {settingsActive && (
                <SettingsPopup
                    title={"RGB Light Settings"}
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
                                Choose color:
                            </label>
                            <input
                                id="color"
                                type="color"
                                value={newState.rgb}
                                onChange={(e) => {
                                    const newS = { ...newState };
                                    newS.rgb = e.target.value;
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
