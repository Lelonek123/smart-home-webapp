import React from "react";
import style from "./contentWrapper.css";

function ContentWrapper(props) {
    return <div className="main-wrapper">{props.children}</div>;
}

export default ContentWrapper;
