DROP TABLE IF EXISTS appointments CASCADE;
CREATE TABLE appointments(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    rating INT,
    isConfirmed BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT Now() ,
    modified_at TIMESTAMPTZ DEFAULT Now() ,
    services_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    availabilities_id INTEGER REFERENCES availabilities(id) ON DELETE CASCADE,
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE

);
