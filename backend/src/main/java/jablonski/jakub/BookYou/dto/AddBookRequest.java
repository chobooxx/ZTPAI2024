package jablonski.jakub.BookYou.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddBookRequest {

    private String title;
    private String author;
    private String description;
    private String photo;
    private String isbn;
}
