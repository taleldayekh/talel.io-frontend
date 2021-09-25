import React from 'react';
import { InputViewProps } from 'src/views/inputView/InputView.interface';

const InputView: React.FC<InputViewProps> = (props: InputViewProps) => {
  const { password, emitValue } = props;

  return (
    <input
      onChange={(e) => emitValue(e.target.value)}
      type={password ? 'password' : 'text'}
    />
  );
};

export default InputView;
