import React from "react";

import "./HomePage.css";

import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import HomePageRecommendedBook from "../HomePageRecommendedBook/HomePageRecommendedBook";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_main_top_title">Recommendations:</div>
        <div className="content_main_top">
          <HomePageRecommendedBook />
          <HomePageRecommendedBook />
          <HomePageRecommendedBook />
        </div>
        <div className="content_main_top_title">Best rated books:</div>
        <div className="content_main_bot">
          <HomePageRecommendedBook />
          <HomePageRecommendedBook />
          <HomePageRecommendedBook />
        </div>
      </ContentBox>
    </>
  );
};

export default HomePage;
