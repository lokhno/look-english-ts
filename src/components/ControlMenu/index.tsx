import React, { ReactNode } from "react";

import "./ControlMenu.scss";

interface ControlMenuProps {
    children: ReactNode[];
    className?: string;
    Form: ReactNode;
}

export const ControlMenu: React.FC<ControlMenuProps> = ({ children, className, Form }) => {
    return (
        <>
            {Form}
            <div className={`${className ? `${className} control-menu` : `control-menu`}`}>{children}</div>
        </>
    );
};
