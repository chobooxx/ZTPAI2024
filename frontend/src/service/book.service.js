import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/book/";

const register = (name, surname, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    surname,
    email,
    password,
  });
};

const addBook = (title, author, description, photo, isbn) => {
  return axios
    .post(
      API_URL + `create`,
      {
        title,
        author,
        description,
        photo,
        isbn,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

const BookService = {
  addBook,
};

export default BookService;
