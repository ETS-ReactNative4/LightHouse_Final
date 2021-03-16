DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations(
    id SERIAL PRIMARY KEY NOT NULL,
    full_address VARCHAR(255),
    num INT,
    street VARCHAR(255),
    city VARCHAR(255),
    postal_code VARCHAR(255),
    country VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT Now() ,
    modified_at TIMESTAMPTZ DEFAULT Now() ,
    lat FLOAT,
    long FLOAT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
