import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./BookListElement.css";

const BookListElement = ({ book }) => {
  return (
    <Link to={`/book/${book.book_id}`} className="book-list-element-container">
      <div className="book-list-element-cover">
        <img alt="Book cover" src={book.photo} />
      </div>
      <div className="book-list-element-info">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <div>
          <p>{book.rating}</p>
          <img alt="" className="" src="../../../img/book_rating_filled.svg" />
        </div>
      </div>
    </Link>
  );
};

export default BookListElement;
