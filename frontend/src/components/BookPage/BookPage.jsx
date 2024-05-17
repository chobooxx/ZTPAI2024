import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./BookPage.css";

import authHeader from "../../service/auth-header";

const BookPage = () => {
  // const {
  //   params: { book_id },
  // } = match;
  const [bookInformation, setBookInformation] = useState([]);
  const { book_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/book/bookinfo/${book_id}`, {
        headers: authHeader(),
      })
      .then((response) => {
        setBookInformation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, []);

  console.log(bookInformation.photo);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_book_top">
          <img alt="" src={bookInformation.photo} />

          <div className="content_description">
            <div className="content_description_icons">
              <div className="content_description_element">
                <img alt="" src="../../../img/book_read.svg" />
                <p>Add to read books</p>
              </div>

              <div className="content_description_element">
                <img alt="" src="../../../img/book_add_to_read.svg" />
                <p>Add to to-read list</p>
              </div>

              <div className="content_description_element">
                <img alt="" src="../../../img/book_rating.svg" />
                <p>Reccomend this book</p>
              </div>
            </div>

            <div className="content_description_names">
              <div className="content_description_names_element">Title:</div>
              <div className="content_description_names_element">Author: </div>
              <div className="content_description_names_element">
                Rating: 3%
              </div>
            </div>
          </div>
        </div>
        <div className="content_book_bot">
          <h1>Description</h1>
          <h3>dsfsadfasdfsad </h3>
        </div>
      </ContentBox>
    </>
  );
};

export default BookPage;
