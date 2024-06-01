package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.model.BookCategories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookCategoriesRepository extends JpaRepository<BookCategories, Integer> {

    @Query("SELECT c.category_name FROM BookCategories c WHERE c.category_id = :categoryId")
    String getCategoryName(Integer categoryId);
}
