import React from "react";

import "./Textarea.scss";

interface TextareaProps {
    lable: string;
    className?: string;
    handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    textareaValue?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ lable, className, textareaValue, handleChange }) => {
    return (
        <div className={`${className ? `${className} textarea` : `textarea`}`}>
            <div className="textarea__lable">{lable}</div>
            <textarea value={textareaValue} onChange={handleChange} />
        </div>
    );
};
