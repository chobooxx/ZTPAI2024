package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
public class BookController {
    private final BookRepository bookRepository;

    @GetMapping("/all")
    public List<Book> getAllBooks() {
        return bookRepository.findUserReadBooks();
    }
}
