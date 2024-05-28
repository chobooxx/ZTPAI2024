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
  const [bookStatus, setBookStatus] = useState({});
  const [bookInformation, setBookInformation] = useState([]);
  const { id } = useParams();

  const fetchBookStatus = async (bookId) => {
    axios
      .get(`http://localhost:8080/api/v1/userbook/${bookId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        setBookStatus(response.data);
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

  useEffect(() => {
    const getStatus = async () => {
      await fetchBookStatus(id);
    };

    getStatus();
  }, [id]);

  const handleAddToRead = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/add/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({
          ...prevStatus,
          read: true,
          toRead: false,
        }));
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };

  const handleAddToToRead = () => {
    // Dodaj książkę do listy do przeczytania - tutaj zaktualizuj stan i API
    setBookStatus((prevStatus) => ({ ...prevStatus, toRead: true }));
  };

  const handleLike = () => {
    // Polub książkę - tutaj zaktualizuj stan i API
    setBookStatus((prevStatus) => ({ ...prevStatus, liked: true }));
  };

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_book_top">
          <img alt="" src={bookInformation.photo} />

          <div className="content_description">
            <div className="content_description_icons">
              <Button
                onClick={handleAddToRead}
                className="content_description_element"
              >
                <img alt="" src="../../../img/book_read.svg" />
                <p>Add to read books</p>
              </Button>

              {!bookStatus.read && (
                <button
                  onClick={handleAddToToRead}
                  className="content_description_element"
                >
                  <img alt="" src="../../../img/book_add_to_read.svg" />
                  <p>Add to to-read list</p>
                </button>
              )}

              {bookStatus.read && (
                <button
                  onClick={handleLike}
                  className="content_description_element"
                >
                  <img alt="" src="../../../img/book_rating.svg" />
                  <p>Like this book</p>
                </button>
              )}
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
