import { Link, useLocation, useParams } from "react-router-dom"

/**
 * @name BreadCrumb
 * @description This component is used to display a breadcrumb navigation for the application.
 * @returns A breadcrumb navigation for the application.
 * @example
 * <BreadCrumb></BreadCrumb>
 * // returns a breadcrumb navigation for the application.
 */
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