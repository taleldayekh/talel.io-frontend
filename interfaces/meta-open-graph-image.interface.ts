import { MetaOpenGraphImageSizes } from 'enums';

export interface MetaOpenGraphImage {
    url: string;
    width: MetaOpenGraphImageSizes;
    height: MetaOpenGraphImageSizes;
    alt: string;
}
