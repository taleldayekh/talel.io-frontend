'use client';

import ArticleView from 'views/ArticleView/ArticleView';

// TODO: Typing
export default function Article({ params }: any) {
  const { slug } = params;

  return <ArticleView slug={slug} />;
}
