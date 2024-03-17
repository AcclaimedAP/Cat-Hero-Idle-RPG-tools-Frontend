
import { GettingStarted } from "components/Articles/Articles/General/GettingStarted"

/**
 * @name ITipsTricksArticle
 * @description This interface is used to define the structure of an article.
 * @deprecated This interface is going to be changed in the future.
 * @remarks This will be renamed in the future and changed to fit the new structure of the articles.
 * @param title The title of the article.
 * @param category The category of the article.
 * @param content A function that returns the content of the article.
 * @param authors An array of authors of the article.
 */
export interface ITipsTricksArticle {
  title: string;
  category: string;
  content: () => JSX.Element;
  authors: string[];
}

/**
 * @name articleList
 * @description This constant is used to store the list of articles.
 * @deprecated This will be moved to the backend in the future.
 * 
 */

export const articleList: ITipsTricksArticle[] = [
  {
    title: "Getting Started",
    category: "General",
    content: function () { return <GettingStarted /> },
    authors: ["Alexus"]
  }
]