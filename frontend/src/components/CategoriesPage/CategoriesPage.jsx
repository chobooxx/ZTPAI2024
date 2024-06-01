import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CategoriesPage.css";

import CategoryLink from "../CategoryLink/CategoryLink";
import ContentBox from "../ContentBox/ContentBox";
import authHeader from "../../service/auth-header";
import NavigationBar from "../NavigationBar/NavigationBar";

const CategoriesPage = () => {
  const [bookCategories, setBookCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/categories/all", {
        headers: authHeader(),
      })
      .then((response) => {
        setBookCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="content_categories_title">Categories</div>
        <div className="content_categories_blocks">
          <ul>
            {bookCategories.map((category) => (
              <CategoryLink category={category} />
            ))}
          </ul>
        </div>
      </ContentBox>
    </>
  );
};

export default CategoriesPage;
