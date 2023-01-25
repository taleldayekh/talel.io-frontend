import { ChangeEvent, DragEvent } from 'react';
import { TextFieldType } from 'components/TextField/enums';

export interface TextFieldProps {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onDrop?: (event: DragEvent<HTMLTextAreaElement>) => void;
    type?: TextFieldType;
    multiple?: boolean;
}
