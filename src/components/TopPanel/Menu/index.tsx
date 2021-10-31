import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import classnames from "classnames";

import { Opener } from "./Opener";
import { Dropdown } from "./Dropdown";
import { DropdownItem } from "./DropdownItem";

import "./Menu.scss";

interface MenuProps {
    className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
    const [menuVisibilityStatus, setMenuVisibilityStatus] = useState(false);

    const ref = useOnclickOutside(() => {
        setMenuVisibilityStatus(false);
    });

    const toggleMenuVisibility = () => {
        setMenuVisibilityStatus(!menuVisibilityStatus);
    };

    return (
        <div ref={ref} className={classnames(`menu ${className}`, { menu_open: menuVisibilityStatus })}>
            <Opener userName="Kolya" handleMenuVisibility={toggleMenuVisibility} />
            <Dropdown>
                <Link to="/UserAccount">
                    <DropdownItem>Редактировать профиль</DropdownItem>
                </Link>
                <Link to="/auth">
                    <DropdownItem>Выйти</DropdownItem>
                </Link>
            </Dropdown>
        </div>
    );
};
