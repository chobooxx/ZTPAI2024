package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @ManyToMany
    @JoinTable(name = "user_types",
            joinColumns = {@JoinColumn( name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "type_id")})
    private Set<Type> roles = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "user_to_read_books",
            joinColumns = {@JoinColumn( name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "book_id")})
    private Set<Book> toReadBooks = new HashSet<>();
}
