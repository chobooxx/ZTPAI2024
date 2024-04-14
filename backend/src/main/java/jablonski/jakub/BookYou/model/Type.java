package jablonski.jakub.BookYou.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "types")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int type_id;

    @Column(name = "type_name", nullable = false)
    private String name;
}
