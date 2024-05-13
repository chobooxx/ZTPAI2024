import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import HomePageRecommendedBook from "../HomePageRecommendedBook/HomePageRecommendedBook";

import "./HomePage.css";

import AuthService from "../../service/auth.service";
import authHeader from "../../service/auth-header";

const HomePage = () => {
  const [topThreeRatedBooks, setTopThreeRatedBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/book/bestrating", {
        headers: authHeader(),
      })
      .then((response) => {
        setTopThreeRatedBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

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
          {topThreeRatedBooks.map((book) => (
            <HomePageRecommendedBook book={book} />
          ))}
        </div>
      </ContentBox>
    </>
  );
};

export default HomePage;
