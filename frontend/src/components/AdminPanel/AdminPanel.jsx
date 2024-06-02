import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";
import Form from "react-validation/build/form";
import { Button } from "@mui/base/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import BookService from "../../service/book.service";

import "./AdminPanel.css";

const AdminPanel = () => {
  const [currentComponent, setCurrentComponent] = useState("ab");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const showAddBook = () => setCurrentComponent("ab");

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeAuthor = (e) => {
    const author = e.target.value;
    setAuthor(author);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onChangePhoto = (e) => {
    const photo = e.target.value;
    setPhoto(photo);
  };

  const onChangeIsbn = (e) => {
    const isbn = e.target.value;
    setIsbn(isbn);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setMessage("");

    BookService.addBook(title, author, description, photo, isbn)
      .then((response) => {
        setMessage(`Adding sucessful.\n`);
        // setTimeout(() => {
        //   navigate("/homepage");
        // }, 2000);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(`Update failed. Details: Error: ${resMessage}`);
      });
  };

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="profile-options">
          <Button onClick={showAddBook} className="profile-options-button">
            Add book
          </Button>
          <Button className="profile-options-button">TODO</Button>
        </div>
        <div className="profile-content">
          {/* {currentComponent === "rb" &&
            userReadBooks &&
            userReadBooks.map((book) => <BookListElement book={book} />)} */}

          {currentComponent === "ab" && (
            <div className="profile-admin-container">
              <Form onSubmit={handleAdd}>
                <Input
                  className="profile-admin-block"
                  type="text"
                  name="title"
                  value={title}
                  onChange={onChangeTitle}
                  placeholder="Title"
                />
                <Input
                  className="profile-admin-block"
                  type="text"
                  name="author"
                  value={author}
                  onChange={onChangeAuthor}
                  placeholder="Author"
                />
                <Input
                  className="profile-admin-block"
                  type="text"
                  name="isbn"
                  value={isbn}
                  onChange={onChangeIsbn}
                  placeholder="Isbn"
                />
                <Input
                  className="profile-admin-block"
                  type="text"
                  name="photo"
                  value={photo}
                  onChange={onChangePhoto}
                  placeholder="Photo"
                />
                <Input
                  className="profile-admin-block"
                  type="text"
                  name="description"
                  value={description}
                  onChange={onChangeDescription}
                  placeholder="Description"
                />
                <button className="profile-admin-block">ADD BOOK</button>
                {message && <div className="message">{message}</div>}
              </Form>
            </div>
          )}
        </div>
      </ContentBox>
    </>
  );
};

export default AdminPanel;
