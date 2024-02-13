import { Link, useLocation, useParams } from "react-router-dom"


export const BreadCrumb = () => {
  const { category, content } = useParams()
  const location = useLocation();
  const getRootRoute = () => {
    if (!category) return location.pathname
    return `/${location.pathname.split('/').slice(0, 2)[1]}`
  }
  if (!category) return (
    <div className="text-sm breadcrumbs h-8 m-4">
    </div>
  )

  return (
    <div className="text-sm breadcrumbs h-8 m-4">
      <ul>
        <li><Link to={getRootRoute()}>Back</Link></li>
        <li><Link to={`${getRootRoute()}/${category}`}>{category}</Link></li>
        {content && <li><Link to={`${getRootRoute()}/${category}/${content}`}>{content}</Link></li>}
      </ul>
    </div>
  )


}