package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "types")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer type_id;

    @Column(name = "type_name", nullable = false)
    private String name;

    @ManyToMany(mappedBy = "types")
    private Set<User> users;
}
