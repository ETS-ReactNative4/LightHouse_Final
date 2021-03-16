DROP TABLE IF EXISTS availabilities CASCADE;
CREATE TABLE availabilities(
    id SERIAL PRIMARY KEY NOT NULL,
    start_time TIMESTAMPTZ DEFAULT Now(),
    end_time TIMESTAMPTZ DEFAULT Now(),
    available_date TIMESTAMPTZ DEFAULT Now(),
    created_at TIMESTAMPTZ DEFAULT Now() ,
    modified_at TIMESTAMPTZ DEFAULT Now() ,
    services_id INTEGER REFERENCES services(id) ON DELETE CASCADE

);