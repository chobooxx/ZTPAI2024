import React from 'react'
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import './CategoriesPage.css'
import ContentOfCategoryPage from '../ContentOfCategoryPage/ContentOfCategoryPage';

const CategoriesPage = () => {
  return (
    <>
        <Header />
        <NavigationBar />
        <ContentOfCategoryPage />
    </>
  )
}

export default CategoriesPage