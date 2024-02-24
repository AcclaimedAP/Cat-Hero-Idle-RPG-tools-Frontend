import { useEffect, useState } from "react";
import { getNewsBySlug } from "src/config/api/services/news";
import { INews } from "src/types/INews";
import { useParams } from "react-router-dom";
import { NewsContainer } from "src/components/News/NewsContainer/NewsContainer";



export const NewsView = () => {
  const [newsData, setNewsData] = useState<INews>();
  const { slug, type } = useParams<{ slug: string, type: string }>();
  const fetchNews = async () => {
    if (slug === undefined) return;
    const res: any = await getNewsBySlug(slug);
    if (res.status === 200) {
      setNewsData(res.data.news);
      return;
    }
    console.error(res);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <div className='container-dark'>
        {newsData ? <NewsContainer {...newsData} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};
