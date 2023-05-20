import { TextFieldType } from 'components/TextField/enums';
import { ChangeEvent, DragEvent } from 'react';

export interface TextFieldProps {
  onChange:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
  onDrop?: (event: DragEvent<HTMLTextAreaElement>) => void;
  type?: TextFieldType;
  multiple?: boolean;
  value?: string;
  className?: string;
}
