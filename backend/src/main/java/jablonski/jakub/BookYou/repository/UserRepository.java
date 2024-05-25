package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.model.User;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    @Query("SELECT u.userId FROM User u WHERE u.email = :email")
    Integer findUserIdByEmail(@Param("email") String email);
}
