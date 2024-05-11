package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository  extends JpaRepository<Book, Integer> {

//    @Query("SELECT b FROM Book b WHERE b.book_id in (SELECT urs.book.book_id FROM UserReadBooks urs where urs.user.userId = 1)")
//    List<Book> findUserReadBooks(Integer id);
}
