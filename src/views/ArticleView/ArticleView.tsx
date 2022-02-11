import React from 'react';
import { ArticleViewProps } from 'src/views/ArticleView/interfaces';

const ArticleView: React.FC<ArticleViewProps> = (props: ArticleViewProps) => {
  const { articleHTML } = props;

  return <div dangerouslySetInnerHTML={{ __html: articleHTML }} />;
};

export default ArticleView;
