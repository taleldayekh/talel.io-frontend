import { ButtonProps } from 'components/Button/interfaces';

export default function Button({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
