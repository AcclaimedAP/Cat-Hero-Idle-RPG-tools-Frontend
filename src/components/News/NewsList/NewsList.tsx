import { INews, INewsData } from "src/types/INews"
import { Link } from "react-router-dom";
const NewsContainer = (news: INews) => {
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
    <div>
      <div className='container-light flex flex-col gap-2'>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row justify-between">
          <h3><Link to={`/news/${news.type}/${news.slug}`} className='text-xl'>
            {news.title}
            </Link></h3>
            <p className='text-xs'>{formatDate(news.created_at)} {isUpdated ? ` - Updated at ${formatDate(news.updated_at)}` : ""}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between ">
            <p className="text-sm max-w-[90%]">{news.body}</p>
            <Link to={`/news/${news.type}/${news.slug}`} className="text-xs underline hover:text-indigo-950 text-nowrap text-right translate-y-3">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );

}


export const NewsList = (newsData: INewsData) => {

  const SortByDate = (a: INews, b: INews) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  }

  const sortedNews = newsData.data.sort(SortByDate);

  const newsList = sortedNews.map((news: INews) => {
    return (
      <NewsContainer key={news.slug} {...news} />
    );
  });

  return (
    <div>
      {newsList}
    </div>
  );


}