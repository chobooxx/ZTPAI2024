package jablonski.jakub.BookYou.repository;
import jablonski.jakub.BookYou.model.UserReadBooks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserReadBooksRepository extends JpaRepository<UserReadBooks, Integer> {

    @Query("SELECT COUNT(urb) > 0 FROM UserReadBooks urb WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId")
    boolean existsByUserIdAndBookId(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

    @Query("SELECT COUNT(urb) > 0 FROM UserReadBooks urb WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId AND urb.liked = true")
    boolean existsByUserIdAndBookIdAndLiked(@Param("userId") Integer userId, @Param("bookId") Integer bookId);
}
