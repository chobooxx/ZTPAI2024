package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.mapper.BookMapper;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.service.BookService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    private final BookMapper bookMapper;

    @GetMapping("/bookinfo/{bookId}")
     public ResponseEntity<BookDto> getBookById(@PathVariable int bookId) {
        return ResponseEntity.ok(
                bookMapper.mapToBookDto(bookService.getBookById(bookId))
        );
    }

    @GetMapping("/bestrating")
    public ResponseEntity<List<BookDto>> getBestRating() {
        return ResponseEntity.ok(
                bookService.getBestRating()
                        .stream()
                        .map(book -> bookMapper.mapToBookDto(book))
                        .toList()
        );
    }

    @GetMapping("/random")
    public ResponseEntity<List<BookDto>> getRandomBooks() {
        return ResponseEntity.ok(
                bookService.getRandomBooks()
                        .stream()
                        .map(book -> bookMapper.mapToBookDto(book))
                        .toList()
        );
    }

}
