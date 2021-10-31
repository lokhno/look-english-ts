import React, { useState } from "react";

import { ControlMenu } from "../../../../components/ControlMenu";
import { Button } from "../../../../components/Button";
import { WordForm } from "../WordForm";

import { FormType } from "../../../../types/form";
import { IWord } from "../../../../types/words";

interface WordControlMenuProps {
    selectedWord?: IWord;
    shuffleWords: () => void;
    toggleLearnForm: () => void;
}

export const WordControlMenu: React.FC<WordControlMenuProps> = ({
    selectedWord,
    shuffleWords,
    toggleLearnForm,
}) => {
    const [formType, setFormType] = useState<FormType>("");
    const [overlayHidden, setOverlayHidden] = useState(true);

    const toggleOverlayHidden = () => {
        setOverlayHidden(!overlayHidden);
    };

    return (
        <ControlMenu
            Form={
                <WordForm
                    word={selectedWord}
                    type={formType}
                    overlayHidden={overlayHidden}
                    toggleOverlayHidden={toggleOverlayHidden}
                />
            }
        >
            <Button
                className="control-menu__button"
                alternativeView={<i className="fas fa-plus"></i>}
                handleClick={() => {
                    toggleOverlayHidden();
                    setFormType("add");
                }}
            >
                Добавить
            </Button>
            <Button
                className="control-menu__button"
                alternativeView={<i className="far fa-edit"></i>}
                handleClick={() => {
                    toggleOverlayHidden();
                    setFormType("edit");
                }}
            >
                Редактировать
            </Button>
            <Button
                className="control-menu__button"
                alternativeView={<i className="far fa-trash-alt"></i>}
                handleClick={() => {
                    console.log("Удалить");
                }}
            >
                Удалить
            </Button>
            <Button
                className="control-menu__button"
                alternativeView={<i className="fas fa-recycle"></i>}
                handleClick={() => {
                    shuffleWords();
                }}
            >
                Перемешать
            </Button>
            <Button
                className="control-menu__button"
                alternativeView={<i className="fas fa-graduation-cap"></i>}
                handleClick={() => {
                    toggleLearnForm();
                }}
            >
                Учить
            </Button>
        </ControlMenu>
    );
};
