import axios from "axios";
import { useEffect, useState } from "react";
import { NewsType } from "../../../types/newsType";

export const useAllNews = () => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const ApiUrl = "http://127.0.0.1:8000/api/news/";
  useEffect(() => {
    axios.get<NewsType[]>(ApiUrl).then((res) => {
      const data = res.data.map((news) => ({
        id: news.id,
        created_at: news.created_at,
        update_at: news.update_at,
        title: news.title,
        body: news.body,
      }));
      setNewsData(data);
    });
  }, []);

  return { newsData };
};
