import React from "react";

interface DropdownItemProps {
    children: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
    return <div className="menu__item">{children}</div>;
};
