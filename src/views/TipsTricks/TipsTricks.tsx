import { ContentRouter } from "src/components/CotentRouter/ContentRouter";
import { articleList } from "src/components/TipsTricks/TipsTricksCollection/ArticleList"

export const TipsTricks = () => {

  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Tips & Tricks</h1>
          </div>
        </div>
        <ContentRouter contentList={articleList} />
      </div>
    </>
  );
};
