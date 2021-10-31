import React, { ReactNode } from "react";

interface DropdownProps {
    children: ReactNode[] | ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    return <div className="menu__dropdown">{children}</div>;
};
