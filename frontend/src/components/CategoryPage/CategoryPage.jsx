import { useState, useEffect } from "react";
import axios from "axios";
import ContentBox from "../ContentBox/ContentBox";
import { useParams } from "react-router-dom";

import "./CategoryPage.css";

import authHeader from "../../service/auth-header";
import NavigationBar from "../NavigationBar/NavigationBar";
import BookListElement from "../BookListElement/BookListElement";

const CategoryPage = () => {
  const [booksOfCategory, setBooksOfCategory] = useState([]);
  const [categoryName, setcategoryName] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/categories/categoryBooks/${categoryId}`,
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        setBooksOfCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, [categoryId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/categories/name/${categoryId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        setcategoryName(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, [categoryId]);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="categoryName">{categoryName} books:</div>
        <div className="categoryBooks">
          {booksOfCategory.map((book) => (
            <BookListElement book={book} />
          ))}
        </div>
      </ContentBox>
    </>
  );
};

export default CategoryPage;
