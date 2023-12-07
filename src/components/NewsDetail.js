// NewsDetail.js
import React from "react";

const NewsDetail = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    {/* Display other details like description, image, link, etc. */}
  </div>
);

export default NewsDetail;
