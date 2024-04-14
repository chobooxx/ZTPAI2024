import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Header from '../Header/Header'
import ContentOfBookPage from '../ContentOfBookPage/ContentOfBookPage'

const BookPage = () => {
    return (
        <>
            <NavigationBar />
            <Header/>
            <ContentOfBookPage />
        </>
    )
}

export default BookPage