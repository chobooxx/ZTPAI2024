INSERT INTO users (email, name, password, surname)
VALUES ('maciek@gmail.com', 'Lionel', '12345', 'Messi'),
       ('kuba@gmail.com', 'Cristiano', '12345', 'Ronaldo'),
       ('bla', 'bla', 'bla', 'bla');

INSERT INTO books (title, author, description, isbn, rating)
VALUES ('Władca Pierścieni', 'J.R.R. Tolkien',
        'Epicka powieść fantasy o podróży hobbita Froda Bagginsa, mającej na celu zniszczenie Potężnego Pierścienia.',
        '9788373191723', 5), 
        ('Harry Potter i Kamień Filozoficzny', 'J.K. Rowling',
        'Pierwsza część serii o młodym czarodzieju Harrym Potterze i jego przygodach w Hogwarcie.',
        '9788372780147', 4);

INSERT INTO user_read_books (user_id, book_id, read_date, liked)
VALUES  (1, 1, NOW(), true),
        (2, 2, NOW(), false),
        (1, 2, NOW(), true);
