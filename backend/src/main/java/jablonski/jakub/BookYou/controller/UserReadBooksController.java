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

    private final UserReadBooksService userReadBooksService;
    private final UserService userService;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @GetMapping("/{bookId}")
    public ResponseEntity<UserInfoResponse> gerUserBookInfo(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                userReadBooksService.getUserBookInfo(userId, bookId)
        );
    }

    @PutMapping("/add/{bookId}")
    public void  addUserReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.getUserByEmail(email);
        Integer userId = userService.getUserIdByEmail(email);
        Book book = bookRepository.findById(bookId).orElse(null);

        user.removeFromToReadBooks(book);
        userRepository.save(user);

        userReadBooksService.save(user, book);
    }

    @PutMapping("/delete/{bookId}")
    public void  deleteUserReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.getUserByEmail(email);
        Integer userId = userService.getUserIdByEmail(email);

        userReadBooksService.deleteReadBook(userId, bookId);
    }

    @PutMapping("/addToRead/{bookId}")
    public void  addUserToReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.getUserByEmail(email);

        Book book = bookRepository.findById(bookId).orElse(null);

        user.addToReadBooks(book);
        userRepository.save(user);
    }

    @PutMapping("/like/{bookId}")
    public void  userLikeReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        userReadBooksService.userLikeReadBook(userId, bookId);
    }

    @PutMapping("/unlike/{bookId}")
    public void  userUnLikeReadBook(@PathVariable int bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        userReadBooksService.userUnLikeReadBook(userId, bookId);
    }
}
