import { TextFieldProps } from 'components/TextField/interfaces';
import { TextFieldType } from 'components/TextField/enums';

export default function TextField({
    onChange,
    onDrop,
    type,
    multiple
}: TextFieldProps) {
    const textFieldType = type ? type : TextFieldType.TEXT

    return (
        multiple ? <textarea onChange={onChange} onDrop={onDrop}/> : <input type={textFieldType} onChange={onChange}/>
    )
}
