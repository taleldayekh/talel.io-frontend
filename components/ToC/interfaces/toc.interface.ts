import { ToCHeading } from 'components/ToC/interfaces';

export interface ToC extends ToCHeading {
    subHeadings: ToCHeading[];
}
