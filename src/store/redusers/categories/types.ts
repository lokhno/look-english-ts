import { ICategory } from "../../../types/categories";
import { ListState } from "../../types";

export interface CategoriesState extends ListState<ICategory> {
    nextID: number;
}

export enum CategoriesActionNamesEnum {
    ADD_CATEGORY = "ADD_CATEGORY",
    DELETE_CATEGORIES = "DELETE_CATEGORIES",
    EDIT_CATEGORY = "EDIT_CATEGORY",
    TOGGLE_SELECTED_CATEGORIES = "TOGGLE_SELECTED_CATEGORIES",
}

interface AddCategoryAction {
    type: CategoriesActionNamesEnum.ADD_CATEGORY;
    payload: ICategory;
}

interface DeleteCategoryAction {
    type: CategoriesActionNamesEnum.DELETE_CATEGORIES;
}

interface EditCategoryAction {
    type: CategoriesActionNamesEnum.EDIT_CATEGORY;
    payload: ICategory;
}

interface ToggleSelectedCategoryAction {
    type: CategoriesActionNamesEnum.TOGGLE_SELECTED_CATEGORIES;
    payload: number;
}

export type CategoriesActions = AddCategoryAction | DeleteCategoryAction | EditCategoryAction | ToggleSelectedCategoryAction;
