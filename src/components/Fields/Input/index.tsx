import React from "react";

import "./Input.scss";

interface InputProps {
    className?: string;
    lable?: string;
    inputValue?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelPosition?: "top" | "inline";
    onInputBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({ lable, inputValue, handleChange, className, onInputBlur }) => {
    return (
        <div className={`${className ? `${className} input` : `input`}`}>
            <div className="input__lable">{lable}</div>
            <input type="text" value={inputValue} onChange={handleChange} onBlur={onInputBlur} />
        </div>
    );
};
