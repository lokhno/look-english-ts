import React, { useState, useEffect } from "react";

import { List } from "../../../components/List";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { WordItem } from "./WordItem";
import { WordControlMenu } from "./WordControlMenu";
import { getItemById, shuffle } from "../../../utils/helper";
import { IWord } from "../../../types/words";

import "./MyWords.scss";

interface MyWordsProps {}

export const MyWords: React.FC<MyWordsProps> = () => {
    const [learnForm, setLearnForm] = useState(false);
    const [words, setWords] = useState<IWord[]>([]);
    const wordsFromRedux = useTypeSelector((state) => state.words.items).sort(
        (a, b) => b._id - a._id
    );
    const [shaffled, setShaffled] = useState(false);
    useEffect(() => {
        setWords(wordsFromRedux);
    }, []);
    const selectedWords = useTypeSelector((state) => state.words.selectedItems);

    const shuffleWords = () => {
        if (!shaffled) {
            setWords(shuffle([...words]));
            setShaffled(!shaffled);
        } else {
            setWords(wordsFromRedux.sort((a, b) => b._id - a._id));
            setShaffled(!shaffled);
        }
    };

    const toggleLearnForm = () => {
        setLearnForm(!learnForm)
    }

    return (
        <div className="my-words">
            <WordControlMenu
                selectedWord={
                    selectedWords.size === 1
                        ? getItemById(words, selectedWords.values().next().value)
                        : undefined
                }
                shuffleWords={shuffleWords}
                toggleLearnForm={toggleLearnForm}
            />
            <List className="my-words__list">
                {words.map((item) => (
                    <WordItem key={item._id} word={item} learnForm={learnForm} />
                ))}
            </List>
        </div>
    );
};
