import React from "react";

import "./Title.scss";

interface TitleProps {
    className?: string;
}

export const Title: React.FC<TitleProps> = ({ className }) => {
    return (
        <div className={`${className ? `${className} title` : `title`}`}>
            <div className="title__full">Looks English</div>
            <div className="title__small">LE</div>
        </div>
    );
};
