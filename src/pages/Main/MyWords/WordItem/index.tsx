import React from "react";

import { ListItem } from "../../../../components/ListItem";
import { WordAdditionalInformation } from "../WordAdditionalInformation";
import { WordContent } from "../WordContent";
import { useWordAction } from "../../../../hooks/useActions";

import { IWord } from "../../../../types/words";

import "./WordItem.scss";

interface WordItemProps {
    word: IWord;
    learnForm: boolean;
}

export const WordItem: React.FC<WordItemProps> = ({ word, learnForm }) => {
    const { toggleSelectedWord } = useWordAction();

    const additionalInformation = (
        <WordAdditionalInformation
            category={word.category.title}
            status={word.status}
            examples={word.examples}
        />
    );
    return (
        <ListItem
            onSelect={() => {
                toggleSelectedWord(word._id);
            }}
            additionalInformation={additionalInformation}
        >
            <WordContent learnForm={learnForm} ru={word.ru} eng={word.eng} />
        </ListItem>
    );
};
