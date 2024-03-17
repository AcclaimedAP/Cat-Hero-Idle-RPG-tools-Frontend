import { ContentRouter } from "src/components/ContentRouter/ContentRouter";
import { articleList } from "src/components/Articles/ArticlesCollection/ArticleList"

export const Articles = () => {

  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Articles</h1>
          </div>
        </div>
        <ContentRouter contentList={articleList} />
      </div>
    </>
  );
};
