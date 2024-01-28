import { Link, useParams } from "react-router-dom"


export const BreadCrumb = () => {
  const { category, article } = useParams()

  if (!category) return (
    <div className="text-sm breadcrumbs h-8 m-4">
    </div>
  )

  return (
    <div className="text-sm breadcrumbs h-8 m-4">
      <ul>
        <li><Link to="/tips-tricks">All Articles</Link></li>
        <li><Link to={`/tips-tricks/${category}`}>{category}</Link></li>
        {article && <li><Link to={`/tips-tricks/${category}/${article}`}>{article}</Link></li>}
      </ul>
    </div>
  )


}