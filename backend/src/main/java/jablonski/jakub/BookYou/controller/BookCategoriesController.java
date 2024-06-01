package jablonski.jakub.BookYou.controller;

import jablonski.jakub.BookYou.dto.BookCategoriesDto;
import jablonski.jakub.BookYou.dto.BookDto;
import jablonski.jakub.BookYou.mapper.BookCategoriesMapper;
import jablonski.jakub.BookYou.mapper.BookMapper;
import jablonski.jakub.BookYou.service.BookCategoriesService;
import jablonski.jakub.BookYou.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
public class BookCategoriesController {

    private final BookCategoriesMapper bookCategoriesMapper;
    private final BookCategoriesService bookCategoriesService;
    private final BookService bookService;
    private final BookMapper bookMapper;

    @GetMapping("/all")
    public ResponseEntity<List<BookCategoriesDto>> getAllCategories() {
        return ResponseEntity.ok(
                bookCategoriesService.getAllCategories()
                        .stream()
                        .map(bookCategoriesMapper::mapToBookCategoriesDto)
                        .toList()
        );
    }

    @GetMapping("/categoryBooks/{categoryId}")
    public ResponseEntity<List<BookDto>> getBooksByCategoryId(@PathVariable int categoryId) {
        return ResponseEntity.ok(
                bookService.getBooksByCategoryId(categoryId)
                        .stream()
                        .map(bookMapper::mapToBookDto)
                        .toList()
        );
    }

    @GetMapping("name/{categoryId}")
    public ResponseEntity<String> getCategoryName(@PathVariable int categoryId) {
        return ResponseEntity.ok(
                bookCategoriesService.getCategoryName(categoryId)
        );
    }
    }
