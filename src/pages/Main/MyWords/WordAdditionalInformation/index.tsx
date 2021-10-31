import React from "react";
import { ISelectItem } from "../../../../types/form";

interface WordAdditionalInformationProps {
    status: ISelectItem | undefined;
    category: string;
    examples: string | undefined;
}

export const WordAdditionalInformation: React.FC<WordAdditionalInformationProps> = ({ status, category, examples }) => {
    return (
        <div>
            <div>Статус: {status?.title}</div>
            <div>Категория: {category}</div>
            <div>Примеры: {examples}</div>
        </div>
    );
};
