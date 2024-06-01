import React, { useState, useEffect } from "react";
import axios from "axios";

import authHeader from "../../service/auth-header";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import BookListElement from "../BookListElement/BookListElement";

const ToReadPage = () => {
  const [toReadBooks, setToReadBooks] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/toread`, {
        headers: authHeader(),
      })
      .then((response) => {
        setToReadBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  });

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="categoryName">Books I want to read:</div>
        <div className="categoryBooks">
          {toReadBooks &&
            toReadBooks.map((book) => <BookListElement book={book} />)}
        </div>
      </ContentBox>
    </>
  );
};

export default ToReadPage;
