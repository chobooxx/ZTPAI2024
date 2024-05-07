package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "user_read_books")
public class UserReadBooks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer urb_id;

    @JoinColumn(name = "user_id")
    @ManyToOne
    private User user;

    @JoinColumn(name = "book_id")
    @ManyToOne
    private Book book;

    @Column(name = "read_date")
    private LocalDateTime readDate;

    @Column(name = "liked")
    private boolean liked;
}
