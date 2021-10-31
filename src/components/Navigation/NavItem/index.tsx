import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

interface NavItemProps {
    path: string;
    children: string;
    isActive: boolean;
    toggleActive: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ path, children, isActive, toggleActive }) => {
    return (
        <Link to={path}>
            <li onClick={toggleActive} className={classnames("navigation__item", { navigation__item_active: isActive })}>
                {children}
            </li>
        </Link>
    );
};
