import { HeadMetaProps } from 'src/components/HeadMeta/interfaces';
import { Helmet } from 'react-helmet-async';

const HeadMeta = ({
  title,
  description,
  canonical,
  disableRobots,
  og,
  twitter,
}: HeadMetaProps): JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />

      {disableRobots && <meta name="robots" content="none" />}

      {og &&
        Object.entries(og).map(([key, value], index) =>
          key === 'imageAlt' ? (
            <meta key={index} property="og:image:alt" content={value} />
          ) : (
            <meta key={index} property={`og:${key}`} content={value} />
          ),
        )}

      {twitter &&
        Object.entries(twitter).map(([key, value], index) =>
          key === 'imageAlt' ? (
            <meta key={index} property="twitter:image:alt" content={value} />
          ) : (
            <meta key={index} property={`twitter:${key}`} content={value} />
          ),
        )}
    </Helmet>
  );
};

export default HeadMeta;
