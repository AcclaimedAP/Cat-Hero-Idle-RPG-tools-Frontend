import { useEffect, useState } from "react";
import { getNews } from "src/config/api/services/news";
import { INewsData } from "src/types/INews";
import { NewsList } from "src/components/News/NewsList/NewsList";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";



export const News = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState<INewsData>();
  const [fetched, setFetched] = useState<boolean>(false);
  const { type } = useParams<{ type: string }>();
  const [selectedType, setSelectedType] = useState<string>('');
  const ref = React.useRef(null);
  const newsTypes = ['all', 'game', 'website', 'discord'];
  const radioBackground = <div className="radio-background-checked" ref={ref}></div>;


  const moveBackground = () => {
    if (ref.current !== null) {
      const index = newsTypes.indexOf(selectedType);
      (ref.current as HTMLDivElement).style.left = `${index * 68}px`;
    }
  }

  const radios = newsTypes.map((type) => {
    return (
      <div key={type} className="radio-button">
        <input
          type="radio"
          id={`${type}-news`}
          name="news"
          value={type}
          checked={selectedType === type}
          onChange={() => {
            handleRadioChange(type);
          }}
        />
        <label htmlFor={`${type}-news`}>{type}</label>
      </div>
    );
  });

  const handleRadioChange = (type: string) => {
    setSelectedType(type);
    if (type === 'all') navigate('/news');
    else {
      navigate(`/news/${type}`);
    }
  }

  const fetchNews = async () => {
    if (selectedType === '') return;
    const queryType = selectedType === 'all' ? '' : selectedType;
    const params = queryType ? { page: 1, per_page: 5, type: queryType } : { page: 1, per_page: 5 };
    try {
      console.log("params", params);
      console.log("queryType", queryType)
      const res: any = await getNews(params);
      setNewsData(res.data);
      setFetched(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    moveBackground();
    fetchNews();
  }, [selectedType]);

  useEffect(() => {
    if (type) {
      setSelectedType(type);
      moveBackground();
      return;
    }
    setSelectedType('all');
  }, []);

  return (
    <div>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <h1>News</h1>
        </div>
        <div className="flex flex-row justify-center">
          <div className="radio-background text-sm flex flex-row gap-2">
            {radios}
            {radioBackground}
          </div>
        </div>
        {newsData && newsData.data.length > 0 ? <NewsList {...newsData} /> : fetched ? <h1>No news found</h1> : <h1>Loading...</h1>}
      </div>
    </div>
  );
};
