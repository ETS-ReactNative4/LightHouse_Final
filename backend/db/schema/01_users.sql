DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at INT NOT NULL,
    modified_at INT NOT NULL,
    service_range INT NOT NULL,
    isServiceProvider BOOLEAN NOT NULL
);