import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { Input } from "../../../../components/Fields/Input";

import "./WordContent.scss";

interface WordContentProps {
    ru: string;
    eng: string;
    learnForm: boolean;
}

export const WordContent: React.FC<WordContentProps> = ({ ru, eng, learnForm }) => {
    const [engText, setEngText] = useState("");
    const [dirty, setDirty] = useState(false);
    const onBlur = () => {
        setDirty(true);
    };
    useEffect(() => {
        if(!learnForm && engText !== "" && dirty) {
            setEngText("")
            setDirty(false)
        }
    }, [learnForm])
    return (
        <div className="word-content">
            <div className="word-content__eng-word">
                {!learnForm ? (
                    <>{eng}</>
                ) : (
                    <Input
                        onInputBlur={onBlur}
                        className={classnames(
                            {
                                "word-content__input_error": dirty && engText !== eng,
                            },
                            "word-content__input"
                        )}
                        inputValue={engText}
                        handleChange={(e) => {
                            setEngText(e.target.value);
                        }}
                    />
                )}
            </div>
            <div className="word-content__separator">
                <div> </div>
            </div>
            <div className="word-content__rus-word">{ru}</div>
        </div>
    );
};
