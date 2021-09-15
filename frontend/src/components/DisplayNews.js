import React from 'react';
import '../styles/DisplayNews.css';

const DisplayCard = ({news,index}) => ( 
    <>
    <div className="card" key={index}>
    <div className="content">
      <h3>
        <a href={news.url} target="_blank" >
          {news.title}
        </a>
      </h3>
      <p>{news.description}</p>
        <p>
          Published By <i>{news.author ? news.author : "Anonymous"}</i> &nbsp; -  &nbsp; {news.publishedAt.split("T")[0]}
        </p>
    </div>
    
    {news.urlToImage && <div className="image">
      <img src={news.urlToImage} alt="" />
    </div>}
  </div>
  </>
);

const DisplayNews = ({latestNewsOfUK}) => (
<div className="cardsContainer">
{latestNewsOfUK.length > 0 && latestNewsOfUK.map((news, index) => {
  return (
      <DisplayCard news={news} index={index}/>
  );
})}
</div>
);

export default DisplayNews;