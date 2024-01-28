import { useEffect, useState } from "react"
import { articleList, ITipsTricksArticle } from "./TipsTricksList/ArticleList"
import { Link, useParams } from "react-router-dom"

export const TipsTricksCollection = () => {
  const { category } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState(articleList)

  const filterBySearch = (articleList: ITipsTricksArticle[]) => {
    if (!searchQuery) return articleList
    const filtered = articleList.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()))
    return filtered
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filterByCategory = (articleList: ITipsTricksArticle[]) => {
    if (!category) return articleList
    const filtered = articleList.filter(article => article.category === category)
    return filtered
  }

  const sortByCategory = (articleList: ITipsTricksArticle[]) => {
    const sorted = articleList.sort((a, b) => {
      if (a.category < b.category) return -1
      if (a.category > b.category) return 1
      return 0
    })
    return sorted
  }

  const getAllCategories = (articleList: ITipsTricksArticle[]) => {
    const categories = articleList.map(article => article.category)
    const uniqueCategories = [...new Set(categories)]
    return uniqueCategories
  }

  useEffect(() => {
    const filtered = filterBySearch(articleList)
    setArticles(filtered)
  }, [searchQuery])

  const categories = getAllCategories(filterByCategory(articles))
  const sortedList = sortByCategory(articles)

  return (
    <>
      <div className="container-dark flex flex-col">
        <div className="m-4">
          <input type="text" name="searchQuery" placeholder="Search for an article" value={searchQuery} onChange={handleSearch} className="container-dark-inner h-8 w-64" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-8">
        {categories.map(category => {
          return (
            <div key={category}>
              <h2><Link to={`/tips-tricks/${category}`}>{category}</Link></h2>
              <ul>
                {sortedList.map(article => {
                  if (article.category !== category) {
                    return null
                  }
                  return (
                    <li key={`${category}-${article.title}`}>
                      <Link to={`/tips-tricks/${category}/${article.title}`}>{article.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}