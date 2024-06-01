package jablonski.jakub.BookYou.service;

import jablonski.jakub.BookYou.model.BookCategories;
import jablonski.jakub.BookYou.repository.BookCategoriesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookCategoriesService {
    private final BookCategoriesRepository bookCategoriesRepository;

    public List<BookCategories> getAllCategories() {

        return bookCategoriesRepository.findAll();
    }

    public String getCategoryName(Integer categoryId) {
        return bookCategoriesRepository.getCategoryName(categoryId);
    }
}
