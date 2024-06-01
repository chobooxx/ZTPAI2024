import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";

import authHeader from "../../service/auth-header";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentBox from "../ContentBox/ContentBox";

import "./SearchPage.css";
import SearchList from "../SearchList/SearchList";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allBooks, setAllBooks] = useState();

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/book/search`, {
        headers: authHeader(),
      })
      .then((response) => {
        setAllBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <ContentBox>
        <div className="searchBar">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <div className="searchContent">
          <SearchList input={searchInput} />
        </div>
      </ContentBox>
    </>
  );
};

export default SearchPage;
