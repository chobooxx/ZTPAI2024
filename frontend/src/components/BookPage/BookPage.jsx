import React from "react";
import axios from "axios";
import ContentBox from "../ContentBox/ContentBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, useButton } from "@mui/base/Button";

import "./BookPage.css";

import authHeader from "../../service/auth-header";
import NavigationBar from "../NavigationBar/NavigationBar";

const BookPage = () => {
  const [bookStatus, setBookStatus] = useState({
    read: false,
    toRead: false,
    liked: false,
  });
  const [bookInformation, setBookInformation] = useState([]);
  const { id } = useParams();

  const fetchBookStatus = async (bookId) => {
    axios
      .get(`http://localhost:8080/api/v1/userbookinfo/${bookId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        setBookStatus(response.data);
        // return response.data;
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/book/bookinfo/${id}`, {
        headers: authHeader(),
      })
      .then((response) => {
        setBookInformation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, [id]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/v1/userbookinfo/${id}`, {
  //       headers: authHeader(),
  //     })
  //     .then((response) => {
  //       setBookStatus(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching :", error);
  //     });
  // }, [id]);

  useEffect(() => {
    const getStatus = async () => {
      // const status = await fetchBookStatus(id);
      await fetchBookStatus(id);
      // setBookStatus(status);
    };

    // console.log(bookStatus.read);

    getStatus();
  }, [id]);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_book_top">
          <img alt="" src={bookInformation.photo} />

          <div className="content_description">
            <div className="content_description_icons">
              {/* <div className="content_description_element">
                <img alt="" src="../../../img/book_read.svg" />
                <p>Add to read books</p>
              </div> */}

              <Button className="content_description_element">
                <img alt="" src="../../../img/book_read.svg" />
                <p>Add to read books</p>
              </Button>

              {/* <div className="content_description_element">
                <img alt="" src="../../../img/book_add_to_read.svg" />
                <p>Add to to-read list</p>
              </div>

              <div className="content_description_element">
                <img alt="" src="../../../img/book_rating.svg" />
                <p>Reccomend this book</p>
              </div> */}
            </div>

            <div className="content_description_names">
              <div className="content_description_names_element">
                Title: {bookInformation.title}
              </div>
              <div className="content_description_names_element">
                Author: {bookInformation.author}
              </div>
              <div className="content_description_names_element">
                Isbn: {bookInformation.isbn}
              </div>
              <div className="content_description_names_element">
                Rating: {bookInformation.rating}%
              </div>
            </div>
          </div>
        </div>
        <div className="content_book_bot">
          <h1>Description</h1>
          <h3>{bookInformation.description}</h3>
        </div>
      </ContentBox>
    </>
  );
};

export default BookPage;
