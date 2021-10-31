import React from "react";
import { Menu } from "./Menu";
import { Title } from "./Title";

import "./TopPanel.scss";

interface TopPanelProps {}

export const TopPanel: React.FC<TopPanelProps> = () => {
    return (
        <div className="top-panel">
            <Title className="top-panel__title" />
            <Menu className="top-panel__menu" />
        </div>
    );
};
