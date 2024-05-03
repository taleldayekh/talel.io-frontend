'use client'

import ImageSlider from 'components/ImageSlider/ImageSlider';
import ArticlesController from 'views/ArticlesView/ArticlesController';

export default function ArticlesView() {
  const image = [
    {
      src: '/assets/images/dev/placeholder-thumb-1.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-2.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-3.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-4.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-5.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-6.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-7.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-8.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-9.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-10.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-11.jpg',
    },
    {
      src: '/assets/images/dev/placeholder-thumb-12.jpg',
    },
  ];

  const images = image.map((img, index) => ({
    src: img.src,
    alt: `Image ${index + 1}`,
  }));

  // const images = [
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  //   image,
  // ];

  return (
    <ArticlesController
      render={() => (
        <div>
          <ImageSlider images={images} multiple />
        </div>
      )}
    />
  );
}
