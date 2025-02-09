package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.model.Book;
import jablonski.jakub.BookYou.model.User;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    @Query("SELECT u.userId FROM User u WHERE u.email = :email")
    Integer findUserIdByEmail(@Param("email") String email);

    @Query("SELECT COUNT(b) > 0 FROM User u JOIN u.toReadBooks b WHERE u.userId = :userId AND b.book_id = :bookId")
    boolean userToRead(Integer userId, Integer bookId);

    User getUserByEmail(String email);

    @Query("SELECT b FROM User u JOIN u.toReadBooks b WHERE u.userId = :userId")
    List<Book> getUserToReadBooks(Integer userId);

    @Query("SELECT CASE WHEN COUNT(t) > 0 THEN true ELSE false END FROM User u JOIN u.types t WHERE u.userId = :userId AND t.name = 'TYPE_ADMIN'")
    Boolean isAdmin(Integer userId);
}
