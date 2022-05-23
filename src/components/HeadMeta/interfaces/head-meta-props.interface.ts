import { OGSocials, TwitterSocials } from 'src/components/HeadMeta/interfaces';

export interface HeadMetaProps {
  title: string;
  description: string;
  canonical: string;
  disableRobots?: boolean;
  og?: OGSocials;
  twitter?: TwitterSocials;
}
