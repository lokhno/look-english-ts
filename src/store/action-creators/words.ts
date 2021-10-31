import { WordsActionNamesEnum, WordsActions } from "../redusers/words/types";
import { IWord, INewWord } from "../../types/words";

const wordsActionCreators = {
    addWord: (item: INewWord): WordsActions => ({
        type: WordsActionNamesEnum.ADD_WORD,
        payload: item,
    }),
    deleteWords: (): WordsActions => ({
        type: WordsActionNamesEnum.DELETE_WORDS,
    }),
    editWord: (item: IWord): WordsActions => ({
        type: WordsActionNamesEnum.EDIT_WORD,
        payload: item,
    }),
    toggleSelectedWord: (id: number): WordsActions => ({
        type: WordsActionNamesEnum.TOGGLE_SELECTED_WORD,
        payload: id,
    }),
};

export const allWordsActionCreators = {
    ...wordsActionCreators,
};
