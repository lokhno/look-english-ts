import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import useOnclickOutside from "react-cool-onclickoutside";

import { ViewToggler } from "../../ViewToggler";

import { ISelectItem } from "../../../types/form";

import "./Select.scss";

interface SelectProps {
    lable: string;
    items: ISelectItem[];
    className?: string;
    handleChange: (value: ISelectItem) => void;
    selectedItem?: ISelectItem;
}

export const Select: React.FC<SelectProps> = ({ lable, items, className, handleChange, selectedItem }) => {
    const [currentValue, setCurrentValue] = useState(selectedItem?.title || "");

    const [toggleView, setToggleView] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setCurrentValue(selectedItem?.title || "");
    }, [selectedItem?.title]);

    const filteredItems = items.filter((item) => item.title.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()));

    const handleChangeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.target.value);
    };

    //Добавляет фокус на поле ввода
    const setFocus = () => {
        !toggleView && inputRef.current?.focus();
    };

    //Изменение видимости выпадающего списка в зависимости от типа действия
    //all - Всегда меняется способ отображения
    //hide - Скрывает
    //open - Открывает
    const changeView = (type: "all" | "hide" | "open") => {
        if (type === "all") {
            setToggleView(!toggleView);
        }
        if (type === "hide") {
            !toggleView && setToggleView(!toggleView);
        }
        if (type === "open") {
            toggleView && setToggleView(!toggleView);
        }
    };

    const handleViewTogglerClick = () => {
        setFocus();
        changeView("all");
    };

    //Действие при клике на Input
    const handleViewTogglerClickOnInput = () => {
        setFocus();
        changeView("hide");
    };
    //Действие при клике на выпадающее значение
    const handleClickOnSelectLine = (item: ISelectItem) => {
        changeView("open");
        handleChange(item);
        setCurrentValue(item?.title || "");
    };

    const ref = useOnclickOutside(() => {
        changeView("open");
    });

    const selectStyle: string = classnames({
        select__choice_none: filteredItems.length === 0,
        select__choice_one: filteredItems.length === 1,
        select__choice_two: filteredItems.length === 2,
        select__choice_three: filteredItems.length === 3,
        select__choice_four: filteredItems.length === 4,
    });

    return (
        <div className={`${className ? `${className} select` : `select`}`}>
            <div className="select__lable">{lable}</div>
            <div className="select__field" ref={ref}>
                <input
                    type="text"
                    ref={inputRef}
                    onClick={handleViewTogglerClickOnInput}
                    value={currentValue}
                    onChange={handleChangeCurrentValue}
                />
                <ViewToggler isOpen={toggleView} className="select__toggle-button" handleClick={handleViewTogglerClick} />
                <div
                    className={`${classnames("select__choice", { select__choice_hidden: !toggleView })} ${
                        selectStyle ? selectStyle : ""
                    }`}
                >
                    {filteredItems.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    handleClickOnSelectLine(item);
                                }}
                                key={item._id}
                                className={classnames("select__line", { select__line_blank: item.title === "" })}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
