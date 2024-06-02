package jablonski.jakub.BookYou.repository;

import jablonski.jakub.BookYou.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<Type, Integer> {

    Optional<Type> findByName(String name);
}
