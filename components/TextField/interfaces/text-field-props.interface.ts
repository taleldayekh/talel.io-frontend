import { ChangeEvent } from "react";
import { TextFieldType } from "../enums"

export interface TextFieldProps {
    type?: TextFieldType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
