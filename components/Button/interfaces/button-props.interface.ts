import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}
