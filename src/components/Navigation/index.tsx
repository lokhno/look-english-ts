import React, { useState } from "react";
import classnames from "classnames";

import { NavItem } from "./NavItem";

import "./Navigation.scss";

const NAVIGATION_MENU_ITEMS = [
    { name: "Мои слова", path: "words", id: 1 },
    { name: "Мои категории", path: "categories", id: 2 },
    { name: "Учить слова", path: "learnWords", id: 3 },
    { name: "Подборки слова", path: "comunitycategories", id: 4 },
];

const isLocation = (url: string): boolean => window.location.pathname.includes(url);

export const Navigation = () => {
    const [navMenuVisibilityStatus, setNavMenuVisibilityStatus] = useState(false);
    const [activeNavMenuItem, setActiveNavMenuItem] = useState<number>(
        isLocation("/categories") ? 2 : isLocation("/learnWords") ? 3 : isLocation("/comunitycategories") ? 4 : 1
    );

    const handleActiveNavMenuItem = (id: number) => {
        setActiveNavMenuItem(id);
    };

    const toggleNavMenuVisibility = () => {
        setNavMenuVisibilityStatus(!navMenuVisibilityStatus);
    };
    return (
        <ul className={classnames("navigation", { navigation_open: navMenuVisibilityStatus })}>
            <div className="navigation__opener" onClick={toggleNavMenuVisibility}>
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
            </div>
            {NAVIGATION_MENU_ITEMS.map((item) => (
                <NavItem
                    toggleActive={() => {
                        handleActiveNavMenuItem(item.id);
                    }}
                    key={item.id}
                    isActive={activeNavMenuItem === item.id}
                    path={item.path}
                >
                    {item.name}
                </NavItem>
            ))}
        </ul>
    );
};
