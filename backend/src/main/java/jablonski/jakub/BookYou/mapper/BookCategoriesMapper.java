package jablonski.jakub.BookYou.mapper;

import jablonski.jakub.BookYou.dto.BookCategoriesDto;
import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.model.BookCategories;
import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class BookCategoriesMapper {

    public BookCategoriesDto mapToBookCategoriesDto(BookCategories bookCategories) {
        return new BookCategoriesDto(
                bookCategories.getCategory_id(),
                bookCategories.getCategory_name()
        );
    }

    public BookCategories mapToBookCategories(BookCategoriesDto bookCategoriesDto) {
        return new BookCategories(
                bookCategoriesDto.getCategory_id(),
                bookCategoriesDto.getCategory_name()
        );
    }
}
