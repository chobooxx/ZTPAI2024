package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.dto.UserInfoResponse;
import jablonski.jakub.BookYou.repository.UserReadBooksRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserReadBooksService {
    private final UserReadBooksRepository userReadBooksRepository;

    public UserInfoResponse getUserBookInfo(Integer userId, Integer bookId) {

        boolean res1 = userReadBooksRepository.existsById(userId);
        boolean res2 = false;
        boolean res3 = userReadBooksRepository.existsByUserIdAndBookIdAndLiked(userId, bookId);

        return UserInfoResponse.builder()
                .isRead(res1)
                .isToRead(res2)
                .isLiked(res3)
                .build();

    }
}
