package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.exception.BookNotFoundException;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public List<Book> getBestRating() {
        return bookRepository.findTop3ByOrderByRatingDesc();
    }

    public List<Book> getRandomBooks() {
        return bookRepository.findRandomThreeBooks();
    }

    public Book getBookById(Integer bookId) {
        return bookRepository.findById(bookId).orElseThrow(() -> new BookNotFoundException(bookId));
    }
}
