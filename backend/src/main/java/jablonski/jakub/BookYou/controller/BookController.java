package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.AddBookRequest;
import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.mapper.BookMapper;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.repository.UserRepository;
import jablonski.jakub.BookYou.service.BookService;
import jablonski.jakub.BookYou.service.JwtService;
import jablonski.jakub.BookYou.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    private final JwtService jwtService;
    private final BookMapper bookMapper;
    private final UserService userService;

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

    @GetMapping("/search")
    public ResponseEntity<List<BookDto>> getAllBooks() {
        return ResponseEntity.ok(
                bookService.getAllBooks()
                        .stream()
                        .map(bookMapper::mapToBookDto)
                        .toList()
        );
    }

    @GetMapping("/userreadbooks")
    public ResponseEntity<List<BookDto>> getUserReadBooks() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                bookService.getUserReadBooks(userId)
                        .stream()
                        .map(bookMapper::mapToBookDto)
                        .toList()
        );
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void addBook(@RequestBody AddBookRequest book) {
        bookService.addNewBook(bookMapper.toBook(book));
    }
}
