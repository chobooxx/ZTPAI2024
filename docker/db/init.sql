create table books
(
    book_id     serial primary key,
    rating      integer,
    author      varchar(255),
    description varchar(255),
    isbn        varchar(255),
    photo       varchar(255),
    title       varchar(255) not null
);

create table users
(
    user_id  serial  primary key,
    email    varchar(255) not null unique,
    name     varchar(255) not null,
    password varchar(255) not null,
    surname  varchar(255) not null
);


create table user_read_books
(
    book_id   integer constraint fkmebvestkwc9cva93c421tjkd7 references books,
    liked     boolean,
    urb_id    serial primary key,
    user_id   integer constraint fksr4gko873dgexjhv3u4499gwj
            references users,
    read_date timestamp(6)
);



create table user_to_read_books
(
    book_id integer not null constraint fkavrnt4jp4vmm40u3xo9vykq5e references books,
    user_id integer not null constraint fktad47k1igomrxwli0sueubrbd references users,
    primary key (book_id, user_id)
);


create table user_types
(
    type_id integer not null constraint fk963qrkftu4i1746omlqcy95g7  references types,
    user_id integer not null constraint fkiaxlg5wn4xsgb8null7t6d7be references users,
    primary key (type_id, user_id)
);
