import { INews, INewsData } from "src/types/INews"
import { Link } from "react-router-dom";
const NewsContainer = (news: INews) => {

  return (
    <div>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <Link to={`/news/${news.slug}`} className='text-xl'>
            {news.title}
          </Link>
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