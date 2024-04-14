import React from 'react'
import './ContentOfCategoryPage.css'
import '../ContentOfHomePage/ContentOfHomePage.css'

const ContentOfCategoryPage = () => {
    return (
        <div class="content_main">
            <div class="content_categories">
                <div class="content_categories_title">
                    Categories
                </div>

                <div class="content_categories_blocks">
                    <ul>
                        <li><a href="categories?genere=<?=$category->getCategory();?>" class="content_categories_blocks_book">
                            Element
                        </a></li>
                        <li><a href="categories?genere=<?=$category->getCategory();?>" class="content_categories_blocks_book">
                            Element
                        </a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ContentOfCategoryPage