DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT Now() ,
    modified_at TIMESTAMPTZ DEFAULT Now() 
);