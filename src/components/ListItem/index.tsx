import React, { ReactNode, useState } from "react";
import classnames from "classnames";

import "./ListItem.scss";

interface ListItemProps {
    children: ReactNode;
    additionalInformation: ReactNode;
    onSelect?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({ children, onSelect, additionalInformation }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleOpen = (): void => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (e: React.MouseEvent) => {
        if (
            !(
                (e.target as Element).className === "fas fa-chevron-down btn-icon" ||
                (e.target as Element).className === "fas fa-chevron-up btn-icon" ||
                (e.target as Element).className === "" ||
                (e.target as Element).className === "list-item__visibility-toggler-button"
            )
        ) {
            setIsSelected(!isSelected);
            onSelect && onSelect();
        }
    };

    return (
        <div
            onClick={handleSelect}
            className={classnames("list-item", { "list-item_open": isOpen, "list-item_selected": isSelected })}
        >
            <div className="list-item__main-info">
                <div className="list-item__container">{children}</div>
                <div className="list-item__visibility-toggler">
                    <div className="list-item__visibility-toggler-button" onClick={handleOpen}>
                        <i className="fas fa-chevron-down btn-icon"></i>
                        <i className="fas fa-chevron-up btn-icon"></i>
                    </div>
                </div>
            </div>
            <div className="list-item__additional-info">{additionalInformation}</div>
        </div>
    );
};
