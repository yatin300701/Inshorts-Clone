import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";

export default function News({ category }) {
  const [News, setNews] = useState([]);
  const [TotalNews, setTotalNews] = useState(0);
  const [PageSize, setPageSize] = useState(10);
  function pages(s) {
    setPageSize(s + 10);
  }
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=${PageSize}&category=${category}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setNews(data.articles);
        setTotalNews(data.totalResults);
        console.log(TotalNews);
      });
  }, [category, PageSize]);
  // console.log(News);
  return (
    <>
      {/* {News.forEach((data, idx) => {
        <li>Hello</li>;
      })} */}
      {/* <NewsCard /> */}
      {News.map((data) => {
        return <NewsCard data={data} key={data.title} />;
      })}
      {
        <Button variant="secondary" onClick={pages}>
          Load More
        </Button>
      }
    </>
  );
}
