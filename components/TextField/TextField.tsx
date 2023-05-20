import { TextFieldType } from 'components/TextField/enums';
import { TextFieldProps } from 'components/TextField/interfaces';
import { ChangeEvent } from 'react';

export default function TextField({
  onChange,
  onDrop,
  type,
  multiple,
  value,
  className,
}: TextFieldProps) {
  const textFieldType = type ? type : TextFieldType.TEXT;

  return multiple ? (
    <textarea
      className={className}
      value={value}
      onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
      onDrop={onDrop}
    />
  ) : (
    <input
      className={className}
      type={textFieldType}
      onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
    />
  );
}
