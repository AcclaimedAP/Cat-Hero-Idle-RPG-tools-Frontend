import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BreadCrumb } from "components/BreadCrumb/BreadCrumb";
import { CategorizedList } from "components/CategorizedList/CategorizedList";
import { IGenericContent } from "types/IGenericContent";

/**
 * @name ContentRouter
 * @description This component is used to display a list of content, and to display a single piece of content.
 * @param contentList An array of IGenericContent objects.
 * @returns A list of content, categorized by category, and a single piece of content.
 * @example
 * <ContentRouter contentList={contentList}></ContentRouter>
 * // returns a list of content, categorized by category, and a single piece of content.
 */

export const ContentRouter = ({ contentList }: { contentList: IGenericContent[] }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [contents, setContents] = useState(contentList)
  const { content } = useParams()
  const filterBySearch = (contentList: IGenericContent[]) => {
    if (!searchQuery) return contentList
    const filtered = contentList.filter(content => content.title.toLowerCase().includes(searchQuery.toLowerCase()))
    return filtered
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const filtered = filterBySearch(contents)
    setContents(filtered)
  }, [searchQuery])

  const currentContent = contents.find(
    (contentItem) => contentItem.title === content
  );

  const currentContentComponent = () => {
    return currentContent ? currentContent.content() :
      <>
        <h4 className="text-lg text-error text-center">
          No content by that name found, perhaps it has been moved or deleted.
        </h4>
      </>;
  };

  return (
    <>
      <BreadCrumb />
      {content ?
        currentContentComponent()
        :
        <>
          <div className="container-dark flex flex-col">
            <div className="m-4">
              <input type="text" name="searchQuery" placeholder="Search" value={searchQuery} onChange={handleSearch} className="container-dark-inner h-8 w-64" />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-8">
            <CategorizedList contentList={contents} />
          </div>
        </>
      }
    </>
  )
}
