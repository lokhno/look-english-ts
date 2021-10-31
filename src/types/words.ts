import { ICategory } from "./categories";
import { ISelectItem } from "./form";

export interface IWord extends INewWord {
    _id: number;
}

export interface INewWord {
    _id?: number;
    eng: string;
    ru: string;
    status?: ISelectItem;
    category: ICategory;
    examples?: string;
}
