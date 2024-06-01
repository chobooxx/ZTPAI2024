import React, { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../../service/auth-header";

import BookListElement from "../BookListElement/BookListElement";

const SearchList = (props) => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/book/search`, {
        headers: authHeader(),
      })
      .then((response) => {
        setAllBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, []);

  const filteredData = allBooks.filter((book) => {
    if (props.input === "") {
      return book;
    } else {
      return (
        book.title.toLowerCase().includes(props.input) ||
        book.author.toLowerCase().includes(props.input)
      );
    }
  });
  return (
    <>
      {filteredData.map((book) => (
        <BookListElement book={book} />
      ))}
    </>
  );
};

export default SearchList;
