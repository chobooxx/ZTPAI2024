package jablonski.jakub.BookYou.repository;
import jablonski.jakub.BookYou.model.UserReadBooks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserReadBooksRepository extends JpaRepository<UserReadBooks, Integer> {

    @Query("SELECT COUNT(urb) > 0 FROM UserReadBooks urb WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId")
    boolean existsByUserIdAndBookId(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

    @Query("SELECT COUNT(urb) > 0 FROM UserReadBooks urb WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId AND urb.liked = true")
    boolean existsByUserIdAndBookIdAndLiked(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

    @Modifying
    @Transactional
    @Query("UPDATE UserReadBooks urb SET urb.liked = true WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId")
    void userLikeReadBook(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

    @Modifying
    @Transactional
    @Query("UPDATE UserReadBooks urb SET urb.liked = false WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId")
    void userUnLikeReadBook(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

    @Modifying
    @Transactional
    @Query("DELETE FROM UserReadBooks urb WHERE urb.user.userId = :userId AND urb.book.book_id = :bookId")
    void deleteReadBook(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

}
