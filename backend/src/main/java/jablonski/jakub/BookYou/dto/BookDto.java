package jablonski.jakub.BookYou.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private int book_id;
    private String title;
    private String author;
    private String photo;
    private String description;
    private String isbn;
    private int rating;
}
