import React from "react";

let ModalWindow = ({ isOpen, onClose, children}) => {
    if(!isOpen) return null;
    return(
        <div className="Close" onClick={onClose}>
            <div className="test"></div>
        </div>
    )
}

export default ModalWindow;