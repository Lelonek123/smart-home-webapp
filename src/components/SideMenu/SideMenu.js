import React from "react";
import "./SideMenu.css";
import ArrowIcon from "./ArrowIcon.js";
import { default as PadlockIcon } from "components/SvgIcons/Padlock.js";
import { logout } from "firebase.js";
import { socket } from "socketIo.js";

function SideMenu(props) {
    const [active, setActive] = React.useState(false);

    return (
        <>
            <div className={`sideMenu ${active ? "active" : ""}`}>
                <div className={`sideMenuHeader ${active ? "active" : ""}`}>
                    <button
                        className="headerButton"
                        onClick={() => {
                            setActive(!active);
                        }}
                    >
                        <div className="svg">
                            <ArrowIcon></ArrowIcon>
                        </div>
                    </button>
                    <div>
                        <p>Smart</p>
                        <p>Home</p>
                    </div>
                </div>
                <div className={`sideMenuContent ${active ? "active" : ""}`}>
                    {props.children.map((child) => {
                        return (
                            <button
                                key={child.key}
                                onClick={child.props.onClick}
                            >
                                {child.props.children}
                                <div className="text">
                                    {child.props.activeText}
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className={`sideMenuFooter ${active ? "active" : ""}`}>
                    <button
                        className="footerButton"
                        onClick={() => {
                            socket.disconnect();
                            logout();
                        }}
                    >
                        <div className="svg">
                            <PadlockIcon></PadlockIcon>
                        </div>
                        <div className="text">LogOut</div>
                    </button>
                </div>
            </div>
            {active && window.innerWidth < 540 && (
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "100vh",
                        right: "0",
                        backgroundColor: "hsla(0, 0%, 0%, 0.8)",
                        zIndex: "100",
                    }}
                ></div>
            )}
        </>
    );
}

export default SideMenu;
