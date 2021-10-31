import { IWord, INewWord } from "../../../types/words";
import { ListState } from "../../types";

export interface WordsState extends ListState<IWord> {
    nextID: number;
}

export enum WordsActionNamesEnum {
    ADD_WORD = "ADD_WORD",
    DELETE_WORDS = "DELETE_WORDS",
    EDIT_WORD = "EDIT_WORD",
    TOGGLE_SELECTED_WORD = "TOGGLE_SELECTED_WORD",
}

interface AddWordAction {
    type: WordsActionNamesEnum.ADD_WORD;
    payload: INewWord;
}

interface DeleteWordAction {
    type: WordsActionNamesEnum.DELETE_WORDS;
}

interface EditWordAction {
    type: WordsActionNamesEnum.EDIT_WORD;
    payload: IWord;
}

interface ToggleSelectedWordAction {
    type: WordsActionNamesEnum.TOGGLE_SELECTED_WORD;
    payload: number;
}

export type WordsActions = AddWordAction | DeleteWordAction | EditWordAction | ToggleSelectedWordAction;
