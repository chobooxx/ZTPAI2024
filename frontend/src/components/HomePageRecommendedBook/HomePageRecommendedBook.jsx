import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./HomePageRecommendedBook.css";

const HomePageRecommendedBook = ({ book }) => {
  return (
    <Link to="/book" className="recommended-book-container">
      {/* <div className="recommended-book-container"> */}
      <div className="book-cover-container">
        <img alt="Book cover" src={book.photo} />
      </div>
      <div className="book-info-conatiner">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <div>
          <p>{book.rating}</p>
          <img alt="" className="" src="../../../img/book_rating_filled.svg" />
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
};

HomePageRecommendedBook.propTypes = {
  book: PropTypes.shape({
    book_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

HomePageRecommendedBook.defaultProps = {
  book: {
    book_id: 5,
    title: "1984",
    author: "George Orwell",
    photo:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg",
    description:
      "A dystopian novel depicting a totalitarian society under constant surveillance and thought control.",
    isbn: "9780451524935",
    rating: 5,
  },
};

export default HomePageRecommendedBook;
