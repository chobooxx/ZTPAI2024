import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Header from '../Header/Header'
import ContentBox from '../ContentBox/ContentBox'
import './BookPage.css'

const BookPage = () => {
    return (
        <>
            <NavigationBar />
            <Header />
            <ContentBox>
                <div class="content_book_top">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg" />

                    <div class="content_description">
                        <div class="content_description_icons">

                            <div class="content_description_element">
                                <img src="../../../img/book_read.svg" />
                                <p>Add to read books</p>
                            </div>

                            <div class="content_description_element">
                                <img src="../../../img/book_add_to_read.svg" />
                                <p>Add to to-read list</p>
                            </div>

                            <div class="content_description_element">
                                <img src="../../../img/book_rating.svg" />
                                <p>Reccomend this book</p>
                            </div>
                        </div>

                        <div class="content_description_names">
                            <div class="content_description_names_element">Title:</div>
                            <div class="content_description_names_element">Author: </div>
                            <div class="content_description_names_element">Rating: 3%</div>
                        </div>
                    </div>
                </div>
                <div class="content_book_bot">
                    <h1>Description</h1>
                    <h3>dsfsadfasdfsad </h3>
                </div>
            </ContentBox>
        </>
    )
}

export default BookPage