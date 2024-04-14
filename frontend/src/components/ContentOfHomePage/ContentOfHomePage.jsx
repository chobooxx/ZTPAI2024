import React from 'react'
import './ContentOfHomePage.css'
import HomePageRecommendedBook from '../HomePageRecommendedBook/HomePageRecommendedBook'
import BookOfTheDay from '../BookOfTheDay/BookOfTheDay'

const ContentOfHomePage = () => {
    return (
        <div className="content_main">
            <div className="content_main_left">
                <div className="content_main_left_text">
                    <p>Recomended books!</p>
                </div>

                <div className="content_elements">
                    {/* Todo: mapping from array */}
                    <HomePageRecommendedBook />
                    <HomePageRecommendedBook />
                    <HomePageRecommendedBook />
                    <HomePageRecommendedBook />

                </div>
            </div>

            <BookOfTheDay />
        </div>
    )
}

export default ContentOfHomePage