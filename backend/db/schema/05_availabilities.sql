DROP TABLE IF EXISTS availabilities CASCADE;
CREATE TABLE availabilities(
    id SERIAL PRIMARY KEY NOT NULL,
    start_time INT NOT NULL,
    end_time INT NOT NULL,
    available_date INT NOT NULL,
    created_at INT NOT NULL,
    modified_at INT NOT NULL,
    services_id INTEGER REFERENCES services(id) ON DELETE CASCADE

);