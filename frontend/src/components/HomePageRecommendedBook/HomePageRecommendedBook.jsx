import React from "react";
import "./HomePageRecommendedBook.css";
import { Link } from "react-router-dom";

const HomePageRecommendedBook = () => {
  return (
    <Link to="/book" className="recommended-book-container">
      {/* <div className="recommended-book-container"> */}
      <div className="book-cover-container">
        <img
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1371834025i/17157681.jpg"
        />
      </div>
      <div className="book-info-conatiner">
        <h1>Atomic Habits</h1>
        <h2>James Clear</h2>
        <div>
          <p>12%</p>
          <img alt="" className="" src="../../../img/book_rating_filled.svg" />
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default HomePageRecommendedBook;
