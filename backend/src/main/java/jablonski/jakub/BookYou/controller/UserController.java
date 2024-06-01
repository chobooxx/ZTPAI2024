package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.dto.UserDto;
import jablonski.jakub.BookYou.mapper.BookMapper;
import jablonski.jakub.BookYou.mapper.UserMapper;
import jablonski.jakub.BookYou.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final BookMapper bookMapper;
    private final UserMapper userMapper;

    @GetMapping("/toread")
    public ResponseEntity<List<BookDto>> getUserToReadBooks() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                userService.getUserToReadBooks(userId)
                        .stream()
                        .map(bookMapper::mapToBookDto)
                        .toList()
        );
    }

    @GetMapping("/info")
    public ResponseEntity<UserDto> getUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Integer userId = userService.getUserIdByEmail(email);

        return ResponseEntity.ok(
                userMapper.mapToUserDto(userService.getUserInfo(userId))
        );
    }
}
