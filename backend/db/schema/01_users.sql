DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(255) ,
    photo VARCHAR(255) ,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) ,
    created_at TIMESTAMPTZ DEFAULT Now() ,
    modified_at TIMESTAMPTZ DEFAULT Now() ,
    service_range INT ,
    isServiceProvider BOOLEAN 
);