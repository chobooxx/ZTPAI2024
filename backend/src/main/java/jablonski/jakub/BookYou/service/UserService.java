package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public int getUserIdByEmail(String email) {
        return userRepository.findUserIdByEmail(email);
    }
    public List<Book> getUserToReadBooks(Integer userId) {
        return userRepository.getUserToReadBooks(userId);
    }
}
