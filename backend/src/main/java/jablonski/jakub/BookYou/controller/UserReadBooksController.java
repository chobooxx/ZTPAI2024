package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.model.User;
import jablonski.jakub.BookYou.repository.BookRepository;
import jablonski.jakub.BookYou.repository.UserRepository;
import jablonski.jakub.BookYou.service.JwtService;
import jablonski.jakub.BookYou.service.UserReadBooksService;
import jablonski.jakub.BookYou.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/userbook")
@RequiredArgsConstructor
public class UserReadBooksController {
    @Autowired
    private final UserReadBooksService userReadBooksService;
    private final UserService userService;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;

    @PutMapping("/add/{bookId}")
    public void  addUserReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.getUserByEmail(email);
        Integer userId = userService.getUserIdByEmail(email);
        Optional<Book> book = bookRepository.findById(bookId);

        user.removeFromToReadBooks(book.orElse(null));
        userRepository.save(user);

        userReadBooksService.save(user, book.orElse(null));
    }

    @PutMapping("/addToRead/{bookId}")
    public void  addUserToReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.getUserByEmail(email);

        Optional<Book> book = bookRepository.findById(bookId);

        user.addToReadBooks(book.orElse(null));
        userRepository.save(user);
    }


    @GetMapping("/{bookId}")
    public ResponseEntity<UserInfoResponse> gerUserBookInfo(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                userReadBooksService.getUserBookInfo(userId, bookId)
        );
    }
}
