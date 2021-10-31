import React from "react";
import classnames from "classnames";

import "./Button.scss";

interface ButtonProps {
    children: string;
    className?: string;
    handleClick: () => void;
    state?: "blocked" | "active";
    alternativeView?: React.ReactNode | string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, handleClick, state, alternativeView }) => {
    const isButtonBlocked = state === "blocked";
    const onClick = () => {
        if (!isButtonBlocked) {
            handleClick && handleClick();
        }
    };
    return (
        <div
            onClick={onClick}
            className={classnames({ button_blocked: isButtonBlocked }, `${className ? `${className} button` : `button`}`)}
        >
            <div className="button__title">{children}</div>
            <div className="button__alternative-view">{alternativeView || children}</div>
        </div>
    );
};
