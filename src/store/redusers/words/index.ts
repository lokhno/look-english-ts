import { IWord } from "../../../types/words";
import { WordsState, WordsActions, WordsActionNamesEnum } from "./types";
import { excludeItems, toggleSelectedItems } from "../../../utils/helper";

const initialState: WordsState = {
    nextID: 4,
    selectedItems: new Set(),
    items: [
        {
            eng: "good",
            ru: "хорошо",
            _id: 1,
            status: { title: "Выучено", _id: 2 },
            category: { title: "Прилагательное", _id: 1 },
            examples: "I have good day",
        },
        {
            eng: "small",
            ru: "маленький",
            _id: 2,
            status: { title: "Новое", _id: 1 },
            category: { title: "Прилагательное", _id: 1 },
            examples: "They have small pensions",
        },
        {
            eng: "Friday",
            ru: "пятница",
            _id: 3,
            status: { title: "Выучено", _id: 2 },
            category: { title: "Дни недели", _id: 2 },
            examples: "1 April 1949 was a Friday.",
        },
    ],
};

export const wordsReducer = (state = initialState, action: WordsActions): WordsState => {
    switch (action.type) {
        case WordsActionNamesEnum.ADD_WORD:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        eng: action.payload.eng,
                        ru: action.payload.ru,
                        _id: state.nextID + 1,
                        category: action.payload.category,
                        status: action.payload.status && { title: "Новое", _id: 1 },
                        examples: action.payload.examples,
                    },
                ],
                nextID: state.nextID + 1,
            };
        case WordsActionNamesEnum.DELETE_WORDS:
            return {
                ...state,
                selectedItems: new Set(),
                items: excludeItems<IWord>(state),
            };
        case WordsActionNamesEnum.EDIT_WORD:
            return {
                ...state,
                items: [
                    ...excludeItems<IWord>(state),
                    {
                        _id: action.payload._id,
                        category: action.payload.category,
                        eng: action.payload.eng,
                        ru: action.payload.ru,
                        status: action.payload.status,
                        examples: action.payload.examples,
                    },
                ],
            };
        case WordsActionNamesEnum.TOGGLE_SELECTED_WORD:
            return {
                ...state,
                selectedItems: toggleSelectedItems(state.selectedItems, action.payload),
            };
        default:
            return state;
    }
};
