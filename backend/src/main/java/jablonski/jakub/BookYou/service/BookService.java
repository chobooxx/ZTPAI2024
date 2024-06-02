package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.exception.BookNotFoundException;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.model.User;
import jablonski.jakub.BookYou.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;


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

    public List<Book> getBooksByCategoryId(Integer categoryId) {
        return bookRepository.getBooksByCategoryId(categoryId);
    }

    public List<Book>  getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> getUserReadBooks(Integer userId) {
        return bookRepository.getUserReadBooks(userId);
    }

    public void addNewBook(Book book) {
        bookRepository.save(book);
    }
}
