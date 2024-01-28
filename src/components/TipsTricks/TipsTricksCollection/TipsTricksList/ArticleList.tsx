export interface ITipsTricksArticle {
  title: string;
  category: string;
  article: () => JSX.Element;
}

export const articleList: ITipsTricksArticle[] = [
  {
    title: "abc",
    category: "test category",
    article: function () { return <div>Test article</div> }

  },
  {
    title: "aa",
    category: "test categorytest categorytest categorytest category",
    article: function () { return <div>Test article</div> }

  },
  {
    title: "Bb",
    category: "test category2",
    article: function () { return <div>Test article</div> }

  },
  {
    title: "CC",
    category: "test category2",
    article: function () { return <div>Test article</div> }

  }
]