import { Metadata } from 'next';
import { MetaOpenGraph } from 'interfaces';
import { MetaOpenGraphType } from 'enums';

export interface DocumentHead extends Metadata {
    title: string;
    description: string;
    openGraph?: MetaOpenGraph;
    type: MetaOpenGraphType;
}
