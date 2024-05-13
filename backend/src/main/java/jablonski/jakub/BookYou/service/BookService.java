package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.model.Book;
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
}
