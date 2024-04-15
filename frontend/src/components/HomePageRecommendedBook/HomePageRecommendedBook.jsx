import React from 'react'
import './HomePageRecommendedBook.css'
import { Link } from 'react-router-dom';

const HomePageRecommendedBook = () => {
    return (
        <Link to="/book" className="content_element">
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg" />
            <div className="content_element_description">
                <h1>book name</h1>
                <h2>author</h2>
                <div className="ustaw">
                    <p>12%</p>
                    <img className="recomendLogo" src="../../../img/book_rating_filled.svg" />
                </div>
            </div>
        </Link>
    )
}

export default HomePageRecommendedBook