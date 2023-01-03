import { ChangeEvent } from 'react';
import { TextFieldType } from 'components/TextField/enums';

export interface TextFieldProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: TextFieldType;
}
