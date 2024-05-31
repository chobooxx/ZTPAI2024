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
    if (bookStatus.read) {
      handleDeleteReadBook();
    } else {
      handleAddReadBook();
    }
  };

  const handleAddReadBook = () => {
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

  const handleDeleteReadBook = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/delete/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({
          ...prevStatus,
          read: false,
          liked: false,
        }));
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };

  const handleAddToToRead = () => {
    if (bookStatus.toRead) {
      handleDeleteToToRead();
    } else {
      handleAddToToReadBook();
    }
  };

  const handleAddToToReadBook = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/addToRead/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({ ...prevStatus, toRead: true }));
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };

  const handleDeleteToToRead = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/deleteToRead/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({ ...prevStatus, toRead: false }));
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };

  const handleLike = () => {
    if (bookStatus.liked) {
      handleUnlike();
    } else {
      handleLikeBook();
    }
  };

  const handleLikeBook = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/like/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({ ...prevStatus, liked: true }));
      })
      .catch((error) => {
        console.error("Error liking:", error);
      });
  };

  const handleUnlike = () => {
    axios
      .put(
        `http://localhost:8080/api/v1/userbook/unlike/${id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then(() => {
        setBookStatus((prevStatus) => ({ ...prevStatus, liked: false }));
      })
      .catch((error) => {
        console.error("Error liking:", error);
      });
  };

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_book_top">
          <img alt="Book cover" src={bookInformation.photo} />

          <div className="content_description">
            <div className="content_description_icons">
              <Button
                onClick={handleAddToRead}
                className={`content_description_element ${
                  bookStatus.read ? "read" : ""
                }`}
              >
                <img alt="" src="../../../img/book_read.svg" />
                <p>
                  {bookStatus.read ? "You read that book" : "Add to read books"}
                </p>
              </Button>

              {!bookStatus.read && (
                <Button
                  onClick={handleAddToToRead}
                  className={`content_description_element ${
                    bookStatus.toRead ? "read" : ""
                  }`}
                >
                  <img alt="" src="../../../img/book_add_to_read.svg" />
                  <p>
                    {bookStatus.toRead
                      ? "Remove from to-read list"
                      : "Add to to-read list"}
                  </p>
                </Button>
              )}

              {bookStatus.read && (
                <Button
                  onClick={handleLike}
                  className={`content_description_element ${
                    bookStatus.liked ? "read" : ""
                  }`}
                >
                  <img alt="" src="../../../img/book_rating.svg" />
                  <p>
                    {bookStatus.liked ? "You like this book" : "Like this book"}
                  </p>
                </Button>
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
