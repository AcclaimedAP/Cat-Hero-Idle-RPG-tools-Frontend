import { GeneralArticles } from "../../Articles/General/GeneralArticles";
export interface ITipsTricksArticle {
  title: string;
  category: string;
  article: () => JSX.Element;
}

export const articleList: ITipsTricksArticle[] = [
  {
    title: "Getting Started",
    category: "General",
    article: function () { return <GeneralArticles articleId={0} /> }
  }
]