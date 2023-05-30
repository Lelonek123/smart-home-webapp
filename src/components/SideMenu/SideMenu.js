import React from "react";
import "./SideMenu.css";
import ArrowIcon from "./ArrowIcon.js";
import { default as PadlockIcon } from "components/SvgIcons/Padlock.js";
import { logout } from "firebase.js";

function SideMenu(props) {
    const [active, setActive] = React.useState(false);

    return (
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
                        <button key={child.key} onClick={child.props.onClick}>
                            {child.props.children}
                            <div className="text">{child.props.activeText}</div>
                        </button>
                    );
                })}
            </div>
            <div className={`sideMenuFooter ${active ? "active" : ""}`}>
                <button
                    className="footerButton"
                    onClick={() => {
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
    );
}

export default SideMenu;
