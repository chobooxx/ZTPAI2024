package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public int getUserIdByEmail(String email) {
        return userRepository.findUserIdByEmail(email);
    }
}
