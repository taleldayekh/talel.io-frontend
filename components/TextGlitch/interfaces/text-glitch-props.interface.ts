import { GlitchPositions } from 'components/TextGlitch/enums';

export interface TextGlitchProps {
  text: string;
  glitchPosition: GlitchPositions;
  className?: string;
}
