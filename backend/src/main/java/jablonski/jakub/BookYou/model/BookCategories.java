package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "categories")

public class BookCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer category_id;

    @Column(name = "category_name", nullable = false)
    private String category_name;
}
