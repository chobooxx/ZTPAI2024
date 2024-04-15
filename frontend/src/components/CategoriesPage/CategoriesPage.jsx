import React from 'react'
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import './CategoriesPage.css'
import ContentBox from '../ContentBox/ContentBox'

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <ContentBox>
          <div class="content_categories">
            <div class="content_categories_title">
              Categories
            </div>

            <div class="content_categories_blocks">
              <ul>
                <li><a href="" class="content_categories_blocks_book">
                  Element
                </a></li>
                <li><a href="" class="content_categories_blocks_book">
                  Element
                </a></li>
              </ul>
            </div>

          </div>
      </ContentBox>
    </>
  )
}

export default CategoriesPage