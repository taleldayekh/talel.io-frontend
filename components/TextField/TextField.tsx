import { TextFieldProps } from "./interfaces"

export default function TextField({type, onChange}: TextFieldProps) {
    return (
        <input onChange={onChange}></input>
    )
}
