import { TipsTricksCollection } from "src/components/TipsTricks/TipsTricksCollection/TipsTricksCollection";
import { BreadCrumb } from "src/components/TipsTricks/TipsTricksCollection/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
import { articleList } from "src/components/TipsTricks/TipsTricksCollection/TipsTricksList/ArticleList";

export const TipsTricks = () => {
  const { article } = useParams();
  const currentArticle = articleList.find(
    (articleItem) => articleItem.title === article
  );
  const currentArticleComponent = () => {
    return currentArticle ? currentArticle.article() :
      <>
        <h4 className="text-lg text-error text-center">
          No article by that name found, perhaps it has been moved or deleted.
        </h4>
      </>;
  };
  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Tips & Tricks</h1>
          </div>
        </div>
        <div className="container-light flex flex-col gap-2">
          <BreadCrumb />
          {article ? currentArticleComponent() : <TipsTricksCollection />}
        </div>
      </div>
    </>
  );
};
