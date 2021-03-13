DROP TABLE IF EXISTS appointments CASCADE;
CREATE TABLE appointments(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    isConfirmed BOOLEAN NOT NULL,
    created_at INT NOT NULL,
    modified_at INT NOT NULL,
    services_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    availabilities_id INTEGER REFERENCES availabilities(id) ON DELETE CASCADE,
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE

);
