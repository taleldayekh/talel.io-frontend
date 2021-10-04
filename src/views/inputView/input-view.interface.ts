export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface InputViewProps {
  password?: boolean;
  emitValue: (type: InputType, value: string) => void;
}
