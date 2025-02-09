package jablonski.jakub.BookYou.mapper;

import jablonski.jakub.BookYou.dto.AddBookRequest;
import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.model.Book;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;

@Component
public class BookMapper {

    public BookDto mapToBookDto(Book book) {
        return new BookDto(
                book.getBook_id(),
                book.getTitle(),
                book.getAuthor(),
                book.getPhoto(),
                book.getDescription(),
                book.getIsbn(),
                book.getRating()
        );
    }

    public Book toBook(BookDto bookDto) {
        return new Book(
                bookDto.getBook_id(),
                bookDto.getTitle(),
                bookDto.getAuthor(),
                bookDto.getPhoto(),
                bookDto.getDescription(),
                bookDto.getIsbn(),
                bookDto.getRating(),
                new HashSet<>()
        );
    }

    public Book toBook(AddBookRequest bookRequest) {
        return new Book(
                null,
                bookRequest.getTitle(),
                bookRequest.getAuthor(),
                bookRequest.getPhoto(),
                bookRequest.getDescription(),
                bookRequest.getIsbn(),
                0,
                new HashSet<>()
        );
    }
}
