import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import { Button } from "@mui/base/Button";
import { useState, useEffect } from "react";
import axios from "axios";

import authHeader from "../../service/auth-header";
import BookListElement from "../BookListElement/BookListElement";

import "./ProfilePage.css";

const ProfilePage = () => {
  const [currentComponent, setCurrentComponent] = useState("rb");
  const [userReadBooks, setUserReadBooks] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const showReadBooks = () => setCurrentComponent("rb");
  const showProfileInfo = () => setCurrentComponent("pi");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/book/userreadbooks", {
        headers: authHeader(),
      })
      .then((response) => {
        setUserReadBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user/info", {
        headers: authHeader(),
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching info:", error);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="profile-options">
          <Button onClick={showReadBooks} className="profile-options-button">
            User read books
          </Button>
          <Button onClick={showProfileInfo} className="profile-options-button">
            User info
          </Button>
        </div>
        <div className="profile-content">
          {currentComponent === "rb" &&
            userReadBooks &&
            userReadBooks.map((book) => <BookListElement book={book} />)}

          {currentComponent === "pi" && (
            <div className="profile-info-container">
              <div className="profile-info-block">Name: {userInfo.name}</div>
              <div className="profile-info-block">
                Surname: {userInfo.surname}
              </div>
              <div className="profile-info-block">Email: {userInfo.email}</div>
              <div className="profile-info-block">Total read books: 5</div>
              <div className="profile-info-block">
                Total books marked to read: 5
              </div>
            </div>
          )}
        </div>
      </ContentBox>
    </>
  );
};

export default ProfilePage;
