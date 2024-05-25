package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.service.JwtService;
import jablonski.jakub.BookYou.service.UserReadBooksService;
import jablonski.jakub.BookYou.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/userbookinfo")
@RequiredArgsConstructor
public class UserReadBooksController {
    @Autowired
    private final UserReadBooksService userReadBooksService;
    private final UserService userService;
    private final JwtService jwtService;

    @GetMapping("/{bookId}")
    public ResponseEntity<UserInfoResponse> gerUserBookInfo(Integer bookId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                userReadBooksService.getUserBookInfo(userId, bookId)
        );
    }
}
