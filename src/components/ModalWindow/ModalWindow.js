import React from "react";
import PropTypes from "prop-types";
import "./ModalWindow.css";
import OutsideClickHandler from "react-outside-click-handler";

function ModalWindow(props) {
    return (
        <div className="ModalBackground">
            <OutsideClickHandler
                onOutsideClick={() => {
                    props.onClose();
                }}
                disabled={!props.closeOnClickAway}
                useCapture={true}
            >
                <div className="ModalWindow">{props.children}</div>;
            </OutsideClickHandler>
        </div>
    );
}

ModalWindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    closeOnClickAway: PropTypes.bool.isRequired,
};

export default ModalWindow;
