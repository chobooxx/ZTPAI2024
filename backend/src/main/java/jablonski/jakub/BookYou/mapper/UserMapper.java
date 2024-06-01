package jablonski.jakub.BookYou.mapper;

import jablonski.jakub.BookYou.dto.UserDto;
import jablonski.jakub.BookYou.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUserId(),
                user.getEmail(),
                user.getName(),
                user.getSurname()
        );
    }
}
