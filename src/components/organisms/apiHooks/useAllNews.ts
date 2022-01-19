import axios from "axios";
import { useCallback, useState } from "react";
import { NewsType } from "../../../types/newsType";

export const useAllNews = () => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const ApiUrl = "http://127.0.0.1:8000/api/news/";

  const getNews = useCallback(() => {
    setLoading(true);
    axios
      .get<NewsType[]>(ApiUrl)
      .then((res) => {
        const data = res.data.map((news) => ({
          id: news.id,
          created_at: news.created_at,
          updated_at: news.updated_at,
          title: news.title,
          body: news.body,
        }));
        setNewsData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get<NewsType[]>(ApiUrl)
  //     .then((res) => {
  //       const data = res.data.map((news) => ({
  //         id: news.id,
  //         created_at: news.created_at,
  //         updated_at: news.updated_at,
  //         title: news.title,
  //         body: news.body,
  //       }));
  //       setNewsData(data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  return { getNews, newsData, loading };
};
