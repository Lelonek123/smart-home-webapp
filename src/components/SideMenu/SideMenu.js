import React from "react";
import "./SideMenu.css";
import ArrowIcon from "./ArrowIcon.js";

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
            <div className={`sideMenuContent ${active ? "active" : ""}`}></div>
            <div className={`sideMenuFooter ${active ? "active" : ""}`}></div>
        </div>
    );
}

export default SideMenu;
