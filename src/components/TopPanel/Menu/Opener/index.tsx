import React from "react";

interface OpenerProps {
    userName: string;
    handleMenuVisibility: () => void;
}

export const Opener: React.FC<OpenerProps> = ({ userName, handleMenuVisibility }) => {
    return (
        <div className="menu__opener" onClick={handleMenuVisibility}>
            <div className="menu__greetings">{userName}</div>
            <div className="menu__toggler">
                <i className="fas fa-chevron-down btn-icon"></i>
                <i className="fas fa-chevron-up btn-icon"></i>
            </div>
        </div>
    );
};
