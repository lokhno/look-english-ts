import React, { useEffect, useState } from "react";

import { Button } from "../../../../components/Button";
import { ItemForm } from "../../../../components/ItemForm";
import { Input } from "../../../../components/Fields/Input";
import { Select } from "../../../../components/Fields/Select";
import { Textarea } from "../../../../components/Fields/Textarea";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { useWordAction } from "../../../../hooks/useActions";

import { IWord } from "../../../../types/words";
import { ICategory } from "../../../../types/categories";
import { ISelectItem } from "../../../../types/form";
import { FormType } from "../../../../types/form";

import "./WordForm.scss";

interface WordFormProps {
    word?: IWord;
    type: FormType;
    overlayHidden: boolean;
    toggleOverlayHidden: () => void;
}

export const WordForm: React.FC<WordFormProps> = ({
    word,
    type,
    overlayHidden,
    toggleOverlayHidden,
}) => {
    const { addWord, editWord } = useWordAction();
    const [formRu, setFormRu] = useState(word?.ru);
    const [formEng, setFormEng] = useState(word?.eng);
    const [formExamples, setFormExamples] = useState(word?.examples);
    const [formState, setFormState] = useState(word?.status);
    const [formCategory, setFormCategory] = useState<ICategory | undefined>(word?.category);

    const categories = useTypeSelector((state) => state.categories.items);

    const cleanWordForm = () => {
        setFormState(undefined);
        setFormCategory(undefined);
        setFormRu("");
        setFormExamples("");
        setFormEng("");
    };

    const onCloseForm = () => {
        toggleOverlayHidden();
        cleanWordForm();
    };

    useEffect(() => {
        if (type === "edit") {
            setFormState(word?.status);
            setFormCategory(word?.category);
            setFormRu(word?.ru);
            setFormExamples(word?.examples);
            setFormEng(word?.eng);
        } else {
            cleanWordForm();
        }
    }, [word, type]);

    const actions = (
        <>
            <Button
                className="form__button"
                handleClick={() => {
                    if (type === "add") {
                        addWord({
                            eng: formEng || "",
                            ru: formRu || "",
                            category: formCategory || { title: "??????????", _id: 1 },
                            status: formState,
                            examples: formExamples,
                        });
                        onCloseForm();
                    }
                    if (type === "edit") {
                        editWord({
                            _id: word?._id || 0,
                            eng: formEng || "",
                            ru: formRu || "",
                            category: formCategory || { title: "??????????", _id: 1 },
                            status: formState,
                            examples: formExamples,
                        });
                        onCloseForm();
                    }
                }}
            >
                ??????????????????
            </Button>
            <Button className="form__button" handleClick={onCloseForm}>
                ????????????
            </Button>
        </>
    );
    return !overlayHidden ? (
        <ItemForm actions={actions} overlayHidden={overlayHidden} onCloseForm={onCloseForm}>
            <Input
                className="form__item"
                lable="?????????? ???? ??????????????:"
                inputValue={formRu}
                handleChange={(e) => {
                    setFormRu(e.target.value);
                }}
            />
            <Input
                lable="?????????? ???? ????????????????????:"
                inputValue={formEng}
                handleChange={(e) => {
                    setFormEng(e.target.value);
                }}
            />
            <Select
                lable="??????????????????"
                selectedItem={formCategory}
                items={categories}
                handleChange={(value: ISelectItem) => {
                    setFormCategory(value);
                }}
            />
            <Select
                lable="????????????"
                selectedItem={formState}
                items={[
                    { title: "??????????", _id: 1 },
                    { title: "??????????????", _id: 2 },
                    { title: "??????????2", _id: 3 },
                    { title: "??????????3", _id: 4 },
                ]}
                handleChange={(value: ISelectItem) => {
                    setFormState(value);
                }}
            />
            <Textarea
                lable="??????????????"
                textareaValue={formExamples}
                handleChange={(e) => {
                    setFormExamples(e.target.value);
                }}
            />
        </ItemForm>
    ) : (
        <></>
    );
};
