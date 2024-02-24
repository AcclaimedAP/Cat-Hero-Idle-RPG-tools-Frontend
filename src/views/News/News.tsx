import { useEffect, useState } from "react";
import { getNews } from "src/config/api/services/news";
import { INews, INewsData } from "src/types/INews";
import { NewsList } from "src/components/News/NewsList/NewsList";



export const News = () => {
  const [newsData, setNewsData] = useState<INewsData>();

  const fetchNews = async () => {
    const res: any = await getNews({ page: 1, per_page: 5 });
    setNewsData(res.data);
    console.log(res.data);
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
