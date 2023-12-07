// DetailPage.js
import React from "react";
import { useSelector } from "react-redux";
import NewsDetail from "../components/NewsDetail";

const DetailPage = ({ match }) => {
  const { id } = match.params;
  const article = useSelector((state) =>
    state.news.news.find((a) => a.id === id),
  );

  if (!article) {
    // Handle article not found
    return <div>Article not found</div>;
  }

  return (
    <div>
      <NewsDetail article={article} />
    </div>
  );
};

export default DetailPage;
