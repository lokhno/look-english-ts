import React from "react";
import classnames from "classnames";

import "./ViewToggler.scss";

interface ViewTogglerProps {
    isOpen: boolean;
    className?: string;
    handleClick: () => void;
}

export const ViewToggler: React.FC<ViewTogglerProps> = ({ isOpen, className, handleClick }) => {
    return (
        <div className={`${className ? `${className} toggle-button` : `toggle-button`}`} onClick={handleClick}>
            <div className={classnames("toggle-button__open", { "toggle-button__open_hidden": isOpen })}>
                <i className="fas fa-chevron-down btn-icon"></i>
            </div>
            <div className={classnames("toggle-button__close", { "toggle-button__close_hidden": !isOpen })}>
                <i className="fas fa-chevron-up btn-icon"></i>
            </div>
        </div>
    );
};
