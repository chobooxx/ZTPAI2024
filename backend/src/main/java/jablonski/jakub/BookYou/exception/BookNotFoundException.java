package jablonski.jakub.BookYou.exception;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(Integer id) {
        super("Could not find book with id " + id);
    }
}
