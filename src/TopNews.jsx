import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { BiSkipNext } from "react-icons/bi";

export default function TopNews() {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const cardRef = useRef();

  const getTopNews = async () => {
    const response = await fetch(`https://inshorts.deta.dev/news?category=${id ? id : "all"}`);
    const data = await response.json();
    console.log(data);
    setNews(data.data);
    // const news = data.data.children.map((child) => child.data);
    // setNews(data.data.children.map((child) => child.data));
  };

  useEffect(() => {
    setNews([]);
    getTopNews();
  }, [id]);

  const handleNextCard = () => {
    // get cardRef height
    const cardHeight = cardRef.current.offsetHeight;
    // get current card position
    const currentPosition = cardRef.current.getBoundingClientRect().top;
    // get current scroll position
    const currentScroll = window.pageYOffset;
    // get current scroll position + card height
    const nextScroll = currentScroll + cardHeight;
    // scroll to next card
    window.scrollTo({
      top: nextScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* create a floating button */}
      <div className="fixed bottom-5 right-0 mr-4 mb-10 z-50">
        <button className="bg-white  p-1 rounded shadow-lg border-2 border-black" onClick={handleNextCard}>
          <BiSkipNext size={30} />
        </button>
      </div>
      {/* Reddit API */}
      {/* {news &&
        news.length > 0 &&
        news.map((news) => {
          return <NewsCard key={news.id} news={news} />;
        })} */}
      {/* Inshorts API */}
      {news && news.length > 0 ? (
        news.map((news) => {
          return <NewsCard key={news.id} news={news} ref={cardRef} />;
        })
      ) : (
        <div className="w-full h-full flex items-center justify-center pt-10">
          <SyncLoader />
        </div>
      )}
    </div>
  );
}
