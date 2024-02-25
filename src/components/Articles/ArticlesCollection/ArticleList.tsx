
import { GettingStarted } from "components/Articles/Articles/General/GettingStarted"
export interface ITipsTricksArticle {
  title: string;
  category: string;
  content: () => JSX.Element;
  authors: string[];
}

export const articleList: ITipsTricksArticle[] = [
  {
    title: "Getting Started",
    category: "General",
    content: function () { return <GettingStarted /> },
    authors: ["Alexus"]
  }
]