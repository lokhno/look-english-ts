import { wordsReducer } from "./words";
import { categoryReducer } from "./categories";

const allRedusers = {
    words: wordsReducer,
    categories: categoryReducer,
};

export default allRedusers;
