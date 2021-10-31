import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allWordsActionCreators } from "../store/action-creators/words";

export const useWordAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allWordsActionCreators, dispatch);
};
