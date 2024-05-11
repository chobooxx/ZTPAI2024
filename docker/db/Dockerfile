FROM postgres

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB db

COPY . /app/database
COPY init.sql /docker-entrypoint-initdb.d/