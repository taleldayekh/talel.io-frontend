import { MetaOpenGraphImage } from 'interfaces';

export interface MetaOpenGraph {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: MetaOpenGraphImage[];
}
