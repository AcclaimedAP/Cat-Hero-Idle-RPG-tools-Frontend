import { useEffect, useState } from "react";
import { getNews } from "src/config/api/services/news";
import { INews, INewsData } from "src/types/INews";
import { NewsList } from "src/components/News/NewsList/NewsList";
import { useParams } from "react-router-dom";



export const News = () => {
  const [newsData, setNewsData] = useState<INewsData>();
  const { type } = useParams<{ type: string }>();
  const fetchNews = async () => {
    const params = type ? { page: 1, per_page: 5, type } : { page: 1, per_page: 5 };
    const res: any = await getNews(params);
    setNewsData(res.data);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <h1>News</h1>
        </div>
        {newsData && newsData.data.length > 0 ? <NewsList {...newsData} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};
