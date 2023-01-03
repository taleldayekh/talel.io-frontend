import { TextFieldProps } from 'components/TextField/interfaces';
import { TextFieldType } from 'components/TextField/enums';

export default function TextField({
    onChange,
    type
}: TextFieldProps) {
    const textFieldType = type ? type : TextFieldType.TEXT

    return <input type={textFieldType} onChange={onChange}></input>
}
