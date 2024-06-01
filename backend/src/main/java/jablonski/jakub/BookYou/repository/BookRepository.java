package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.model.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


public interface BookRepository  extends JpaRepository<Book, Integer> {

    List<Book> findTop3ByOrderByRatingDesc();

    @Query("SELECT b from Book b ORDER BY RANDOM() LIMIT 3")
    List<Book> findRandomThreeBooks();

    @Query("SELECT b FROM Book b JOIN b.categories c WHERE c.category_id = :categoryId")
    List<Book> getBooksByCategoryId(Integer categoryId);

    List<Book> findAll();

    @Query("SELECT urb.book FROM UserReadBooks urb WHERE urb.user.userId = :userId")
    List<Book> getUserReadBooks(Integer userId);
}
