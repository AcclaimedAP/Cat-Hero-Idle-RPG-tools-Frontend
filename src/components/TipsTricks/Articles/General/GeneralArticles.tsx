import { GettingStarted } from "./GettingStarted"


export const GeneralArticles = ({ articleId }: { articleId: number }) => {

  const articleList: JSX.Element[] = [
    <GettingStarted />
  ]
  if (articleId >= articleList.length) return (<h1>Article not found</h1>)
  return (
    <>
      {articleList[articleId]}
    </>
  )

}