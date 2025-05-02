import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);
  

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter((news) => news.others.is_today_pick);
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-4">
        Total <span className="text-secondary">{categoryNews.length}</span> News
        Found
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
