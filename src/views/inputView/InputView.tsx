import React from 'react';
import {
  InputViewProps,
  InputType,
} from 'src/views/inputView/input-view.interface';

const InputView: React.FC<InputViewProps> = (props: InputViewProps) => {
  const { password, emitValue } = props;

  return (
    <input
      onChange={(e) =>
        emitValue(
          e.target.type as InputType.PASSWORD | InputType.TEXT,
          e.target.value,
        )
      }
      type={password ? InputType.PASSWORD : InputType.TEXT}
    />
  );
};

export default InputView;
