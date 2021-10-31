import React from "react";

import "./Form.scss";

interface FormProps {
    className?: string;
    children: React.ReactNode;
    actions: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ className, children, actions }) => {
    return (
        <div>
            <div className={`${className ? `${className} form` : `form`}`}>
                {children}

                <div className="form__controller">{actions}</div>
            </div>
        </div>
    );
};
