import { Link, useLocation, useParams } from "react-router-dom"
import { IGenericContent } from "types/IGenericContent"

/**
 * @name CategorizedList
 * @description This component is used to display a list of content, categorized by a category. It is used in the ContentRouter component.
 * @param contentList An array of IGenericContent objects.
 * @returns A list of content, categorized by category.
 * @example
 * <CategorizedList contentList={contentList}></CategorizedList>
 * // returns a list of content, categorized by category.
 */

export const CategorizedList = ({ contentList }: { contentList: IGenericContent[] }) => {

  const { category } = useParams()
  const location = useLocation();
  const filterByCategory = (articleList: IGenericContent[]) => {
    if (!category) return articleList
    const filtered = articleList.filter(article => article.category === category)
    return filtered
  }
  const getRootRoute = () => {
    if (!category) return location.pathname
    return `/${location.pathname.split('/').slice(0, 2)[1]}`
  }
  const getAllCategories = (articleList: IGenericContent[]) => {
    const categories = articleList.map(article => article.category)
    const uniqueCategories = [...new Set(categories)]
    return uniqueCategories
  }

  const sortByCategory = (articleList: IGenericContent[]) => {
    const sorted = articleList.sort((a, b) => {
      if (a.category < b.category) return -1
      if (a.category > b.category) return 1
      return 0
    })
    return sorted
  }


  const categories = getAllCategories(filterByCategory(contentList))
  const sortedList = sortByCategory(contentList)

  return (
    categories.map(category => {
      return (
        <div key={category} className="m-4 flex flex-col gap-2">
          <h2 className="text-2xl hover:underline"><Link to={`${getRootRoute()}/${category}`}>{category}</Link></h2>
          <ul className="flex flex-col gap-1">
            {sortedList.map(content => {
              if (content.category !== category) {
                return null
              }
              return (
                <li className="text-lg hover:underline hover:text-gray-700" key={`${category}-${content.title}`}>
                  <Link className="block" to={`${getRootRoute()}/${category}/${content.title}`}>{content.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    })
  )
}