import React, { useRef, useEffect, useState } from 'react';
import AssetsRepository from 'src/data/assets/assets.repository';
import HttpClient from 'src/libs/http-client/http-client';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticlesRepository from 'src/data/articles/articles.repository';
import CreateArticleViewModel from 'src/view-models/create-article/create-article.view-model';

const ArticlesView: React.FC = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('Protected Hello World');
  const [articlesRepo] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );
  useEffect(() => {
    console.log(inputRef.current);
    // const data = new FormData();
    // data.append('name', 'Talel');

    // console.log(typeof data);

    // for (const pair of data.entries()) {
    //   console.log(pair);
    // }
  }, []);
  return (
    <>
      <textarea
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        ref={inputRef}
        rows={10}
        cols={50}
        onDrop={async (e) => {
          e.preventDefault();
          console.log(e.dataTransfer.files[0]);
          const fileName = e.dataTransfer.files[0].name;
          setInputValue(inputValue + '\r\n' + '\r\n' + fileName);

          const data = new FormData();
          data.append(
            'img',
            e.dataTransfer.files[0],
            e.dataTransfer.files[0].name,
          );

          for (const pair of data.entries()) {
            console.log(pair);
          }

          const repo = new AssetsRepository(HttpClient);
          const res = await repo.uploadImage(data);
          console.log(res);

          setInputValue(
            inputValue + '\r\n' + '\r\n' + `![${fileName}](${res.imageSrc})`,
          );
        }}
      />
      <button
        onClick={() => {
          const createArticleModel = new CreateArticleViewModel(
            'My Dummy Article',
            inputValue,
          );

          const payload = ArticlesMapper.toPayload(createArticleModel);
          articlesRepo.create(payload);
        }}
      >
        Publish Project
      </button>
    </>
  );
};

export default ArticlesView;
