package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.model.User;
import jablonski.jakub.BookYou.model.UserReadBooks;
import jablonski.jakub.BookYou.repository.UserReadBooksRepository;
import jablonski.jakub.BookYou.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class UserReadBooksService {
    private final UserReadBooksRepository userReadBooksRepository;
    private final UserRepository userRepository;

    public UserInfoResponse getUserBookInfo(Integer userId, Integer bookId) {

        boolean res1 = userReadBooksRepository.existsByUserIdAndBookId(userId, bookId);
        boolean res2 = userRepository.userToRead(userId, bookId);
        boolean res3 = userReadBooksRepository.existsByUserIdAndBookIdAndLiked(userId, bookId);

        return UserInfoResponse.builder()
                .isRead(res1)
                .isToRead(res2)
                .isLiked(res3)
                .build();

    }

    public void save(User user, Book book) {
        LocalDateTime now = LocalDateTime.now();

        userReadBooksRepository.save(
                UserReadBooks.builder()
                        .book(book)
                        .user(user)
                        .readDate(now)
                        .liked(false)
                        .build()
        );
    }

    public void userLikeReadBook(Integer userId, Integer bookId) {
        userReadBooksRepository.userLikeReadBook(userId, bookId);
    }

    public void userUnLikeReadBook(Integer userId, Integer bookId) {
        userReadBooksRepository.userUnLikeReadBook(userId, bookId);
    }

    public void deleteReadBook(Integer userId, Integer bookId) {
        userReadBooksRepository.deleteReadBook(userId, bookId);
    }
}
