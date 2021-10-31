import React, { ReactNode } from "react";

import "./List.scss";

interface ListProps {
    className?: string;
    children: ReactNode[];
}

export const List: React.FC<ListProps> = ({ children, className }) => {
    return <div className={`${className ? `${className} list` : `list`}`}>{children?.map((item) => item)}</div>;
};
