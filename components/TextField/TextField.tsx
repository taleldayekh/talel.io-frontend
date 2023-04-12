import { ChangeEvent } from 'react';
import { TextFieldProps } from 'components/TextField/interfaces';
import { TextFieldType } from 'components/TextField/enums';

export default function TextField({
    onChange,
    onDrop,
    type,
    multiple
}: TextFieldProps) {
    const textFieldType = type ? type : TextFieldType.TEXT;

    return (
        multiple ? <textarea onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void} onDrop={onDrop}/> : <input type={textFieldType} onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}/>
    )
}
