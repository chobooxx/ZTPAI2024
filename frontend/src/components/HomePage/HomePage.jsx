import React from 'react';
import './HomePage.css'
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import ContentBox from '../ContentBox/ContentBox';
import HomePageRecommendedBook from '../HomePageRecommendedBook/HomePageRecommendedBook'
import BookOfTheDay from '../BookOfTheDay/BookOfTheDay'


const HomePage = () => {
    return (
        <>
            <Header />
            <NavigationBar />
            <ContentBox>
                <div className="content_main_left">
                    <div className="content_main_left_text">
                        <p>Recomended books!</p>
                    </div>

                    <div className="content_elements">
                        <HomePageRecommendedBook />
                        <HomePageRecommendedBook />
                        <HomePageRecommendedBook />
                        <HomePageRecommendedBook />
                    </div>
                </div>
                <BookOfTheDay />
            </ContentBox>
        </>
    )
}

export default HomePage