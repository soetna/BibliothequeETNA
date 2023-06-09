import React, { useEffect, useState } from 'react';
import '../style/Info.css';

function Info() {
  const [news, setNews] = useState<any[]>([]);
  const [currentArticle, setCurrentArticle] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=cae6e4d23220a963179111e85573676fZ&languages=fr`
      );
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        const filteredArticles = data.data.filter((article: any) => article.image !== null);
        setNews(filteredArticles.slice(0, 5));
        setImageUrl(filteredArticles[0].image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToPrevArticle = () => {
    setCurrentArticle((prevArticle) => (prevArticle === 0 ? news.length - 1 : prevArticle - 1));
    setImageUrl(news[currentArticle].image);
  };

  const goToNextArticle = () => {
    setCurrentArticle((prevArticle) => (prevArticle === news.length - 1 ? 0 : prevArticle + 1));
    setImageUrl(news[currentArticle].image);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="InfoContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {news.length > 0 ? (
        <div className="NewsContent">
          <div className="NewsImage">
            <img src={imageUrl} alt="News" />
          </div>
          <div className="NewsDetails">
            <h2>{news[currentArticle].title}</h2>
            <p>{news[currentArticle].description}</p>
          </div>
        </div>
      ) : (
        <p>Loading news...</p>
      )}
      {news.length > 1 && (
        <div className={`ArticleIndicators ${isHovered ? 'show' : ''}`}>
          {news.map((_, index) => (
            <div
              key={index}
              className={`Indicator ${index === currentArticle ? 'active' : ''}`}
              onClick={() => {
                setCurrentArticle(index);
                setImageUrl(news[index].image);
              }}
            />
          ))}
        </div>
      )}
      {news.length > 1 && isHovered && (
        <div className="ArrowButtons">
          <button className="PrevButton" onClick={goToPrevArticle}>
            &lt;
          </button>
          <button className="NextButton" onClick={goToNextArticle}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default Info;
