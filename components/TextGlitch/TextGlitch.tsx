import { GlitchPositions } from 'components/TextGlitch/enums';
import { TextGlitchProps } from 'components/TextGlitch/interfaces';
import styles from 'components/TextGlitch/text-glitch.module.css';

export default function TextGlitch({
  text,
  glitchPosition,
  className,
}: TextGlitchProps) {
  return (
    <p
      className={`${styles['text-glitch']} ${
        glitchPosition === GlitchPositions.TOP
          ? styles['text-glitch--top']
          : styles['text-glitch--bottom']
      } ${className}`}
    >
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true">{text}</span>
      {text}
    </p>
  );
}
