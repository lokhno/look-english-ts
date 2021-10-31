import React, { useEffect } from "react";
import classnames from "classnames";

import { Form } from "../Form";

import "./ItemForm.scss";

interface ItemFormProps {
    className?: string;
    children: React.ReactNode;
    actions: React.ReactNode;
    overlayHidden: boolean;
    onCloseForm: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({
    className,
    children,
    actions,
    overlayHidden,
    onCloseForm,
}) => {
    useEffect(() => {
        function onKeyup(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onCloseForm();
            }
        }
        window.addEventListener("keyup", onKeyup);
        return () => {
            window.removeEventListener("keyup", onKeyup);
        };
    }, []);
    return (
        <>
            {!overlayHidden && (
                <>
                    <div
                        className={classnames("background", { background_hide: overlayHidden })}
                        onClick={onCloseForm}
                    ></div>

                    <Form className={className} actions={actions}>
                        {children}
                    </Form>
                </>
            )}
        </>
    );
};
