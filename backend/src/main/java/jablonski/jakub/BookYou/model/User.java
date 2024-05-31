package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_types",
            joinColumns = {@JoinColumn( name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "type_id")})
    private Set<Type> types = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "user_to_read_books",
            joinColumns = {@JoinColumn( name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "book_id")})
    private Set<Book> toReadBooks = new HashSet<>();

    public void addToReadBooks(Book book) {
        toReadBooks.add(book);
    }

    public void removeFromToReadBooks(Book book) {
        toReadBooks.remove(book);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return types.stream()
                .map(t -> new SimpleGrantedAuthority(t.getName()))
                .toList();
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
