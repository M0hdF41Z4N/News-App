// NewsItem.js
import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ article, onClick,onNewsClick, onFavoriteClick }) => {
  // console.log(article);
  return (
  <div>
    <h2>{article.title}</h2>
    {/* Display other details like description, image, etc. */}
    {/* <button onClick={() => onNewsClick(article.id)}>Read More</button> */}
    <button onClick={onClick}>Read More</button>
    <button onClick={onFavoriteClick}>Favorite</button>
  </div>
)};

export default NewsItem;
