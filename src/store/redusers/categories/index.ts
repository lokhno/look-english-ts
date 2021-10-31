import { ICategory } from "../../../types/categories";
import { CategoriesActions, CategoriesActionNamesEnum, CategoriesState } from "./types";
import { excludeItems, toggleSelectedItems } from "../../../utils/helper";

const initialState: CategoriesState = {
    nextID: 3,
    selectedItems: new Set<number>(),
    items: [
        { title: "Прилагательное", _id: 1, example: "good - хорошо" },
        { title: "Дни недели", _id: 2, example: "Friday - пятница" },
    ],
};

export const categoryReducer = (state = initialState, action: CategoriesActions): CategoriesState => {
    switch (action.type) {
        case CategoriesActionNamesEnum.ADD_CATEGORY:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        _id: state.nextID + 1,
                        title: action.payload.title,
                        example: action.payload.example,
                    },
                ],
                nextID: state.nextID + 1,
            };
        case CategoriesActionNamesEnum.DELETE_CATEGORIES:
            return {
                ...state,
                selectedItems: new Set(),
                items: excludeItems<ICategory>(state),
            };
        case CategoriesActionNamesEnum.EDIT_CATEGORY:
            return {
                ...state,
                items: [
                    ...excludeItems<ICategory>(state),
                    {
                        _id: action.payload._id,
                        title: action.payload.title,
                        example: action.payload.example,
                    },
                ],
            };
        case CategoriesActionNamesEnum.TOGGLE_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedItems: toggleSelectedItems(state.selectedItems, action.payload),
            };
        default:
            return state;
    }
};
