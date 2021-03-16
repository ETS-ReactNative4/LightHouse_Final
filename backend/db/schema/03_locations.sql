DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations(
    id SERIAL PRIMARY KEY NOT NULL,
    full_address VARCHAR(255) NOT NULL,
    num INT NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    created_at INT NOT NULL,
    modified_at INT NOT NULL,
    lat FLOAT NOT NULL,
    long FLOAT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
