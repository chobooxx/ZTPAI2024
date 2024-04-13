import React from 'react'
import './BookOfTheDay.css'

const BookOfTheDay = () => {
    return (
        <div className="content_main_right">
            <div className="content_main_right_text">Book of the day!</div>

            <div className="content_main_right_bottom">
                <a href="" className="content_main_right_bottom_photo">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg" />
                </a>
                <div className="content_main_right_bottom_horizontal">
                    <h1>name</h1>
                    <h2>author</h2>
                    <h3>description</h3>
                </div>
            </div>
        </div>
    )
}

export default BookOfTheDay