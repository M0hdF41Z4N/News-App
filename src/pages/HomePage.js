// API key : f28c6e870c8d49eaab8c32c62dd18e33
// email : yalek40437@getmola.com
// password : -+RG&ZzEn2YdUS&

// HomePage.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../components/ToggleButton";
import NewsList from "../components/NewsList";
// import { toggleGrid } from "../store/actions/newsActions";
import axios from "axios";
import { useNavigate }  from "react-router-dom";
import { newsSelector } from "../store/reducers/newsReducer";
import { getNewsAsync } from "../store/reducers/newsReducer";

const HomePage = () => {
  // const dispatch = useDispatch();
  const [isGrid,setIsGrid] = useState(true); // useSelector((state) => state.news.isGrid);
  const {news} = useSelector(newsSelector);
  console.log('news :', news);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const handleToggleGrid = () => {
    // dispatch(toggleGrid());
    setIsGrid(!isGrid);
  };

  const handleNewsClick = (id) => {
  console.log('index :', id);
    // Navigate to detail page or show modal
    navigate(`/detail/${id}`);

  };

  const handleFavoriteClick = (id) => {
    // Add/remove article to/from favorites
  };

  useEffect(() => {
    // Getting initial new data
    dispatch(getNewsAsync());

  }, []);
  



  return (
    <div>
      <ToggleButton toggleGrid={handleToggleGrid} isGrid={isGrid} />
      <NewsList
        news={news}
        isGrid={isGrid}
        onNewsClick={handleNewsClick}
        onFavoriteClick={handleFavoriteClick}
      />
    </div>
  );
};

export default HomePage;
