import { INews } from "src/types/INews";


export const NewsContainer = (news: INews) => {
  const isUpdated = news.updated_at !== news.created_at;
  const formatDate = (date: string) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }


  return (
    <>
      <div>
        <div className='container-light flex flex-col'>
          <h1 className="text-2xl p-4 mx-4">
            {news.title}
          </h1>
        </div>
        <div className="container-light">
          <div className="p-4 m-4">
            {news.body}
          </div>
          <div className="p-4 mt-4 me-4 flex justify-end text-sm flex-col text-nowrap">
            <p className='text-xs text-right'>Posted by: {news.author}</p>
            <p className='text-xs text-right'>{formatDate(news.created_at)} {isUpdated ? ` - Updated at ${formatDate(news.updated_at)}` : ""}</p>
          </div>
        </div>
      </div>
    </>

  );


}