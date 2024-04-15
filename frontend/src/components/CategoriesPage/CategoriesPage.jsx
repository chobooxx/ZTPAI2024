import React from 'react'
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import './CategoriesPage.css'
import ContentBox from '../ContentBox/ContentBox'
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <ContentBox>
          <div className="content_categories">
            <div className="content_categories_title">
              Categories
            </div>

            <div className="content_categories_blocks">
              <ul>
                <li><Link href="" className="content_categories_blocks_book">
                  Element
                </Link></li>
                <li><Link href="" className="content_categories_blocks_book">
                  Element
                </Link></li>
              </ul>
            </div>
          </div>
      </ContentBox>
    </>
  )
}

export default CategoriesPage