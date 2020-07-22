
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "teas"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(300) NOT NULL,
    "brand" VARCHAR(300),
    "kind_id" INT,
    "temp_F" INT NOT NULL,
    "min_time" INT NOT NULL,
    "max_time" INT NOT NULL,
    "bitters" BOOLEAN,
    "description" VARCHAR(3000),
    "picture" VARCHAR(1000),
    "google_search_id" VARCHAR(100)
);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "email_address" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "auth_level" INT NOT NULL
);

CREATE TABLE "user_teas"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "tea_id" INT REFERENCES "teas",
    "rating" INT,
    "favorited" BOOLEAN,
    "review" VARCHAR(3000),
    "owned" BOOLEAN
);

CREATE TABLE "categories"
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar
);

ALTER TABLE "user_teas"
    ADD CONSTRAINT user_teas_uq
    UNIQUE (user_id, tea_id) ;

INSERT INTO "teas"
    ("name", "temp_F", "min_time", "max_time", "bitters", "description")
VALUES
    ('White Tea', 185, 60, 120, 'y', 'White tea is tea made from new growth buds and young leaves of the plant Camellia sinensis. The leaves are steamed or fried to inactivate oxidation, and then dried. White tea therefore retains the high concentrations of catechins which are present in fresh tea leaves.')
;

INSERT INTO "teas"
    ("name", "temp_F", "min_time", "max_time", "bitters", "description")
VALUES
    ('Green Tea', 185, 120, 240, 'y', 'Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to other countries in East Asia.')
;

INSERT INTO "teas"
    ("name", "temp_F", "min_time", "max_time", "bitters", "description")
VALUES
    ('Black Tea', 210, 90, 240, 'y', 'Black tea is a true tea that comes from the Camellia sinensis plant. Black tea leaves are allowed to fully oxidize before being processed and dried, which makes the leaves dark brown and gives the tea its signature flavor profile. Black teas tend to be bold and brisk, and they are often described as astringent.')
;

INSERT INTO "teas"
    ("name", "temp_F", "min_time", "max_time", "bitters", "description")
VALUES
    ('Herbal Tea', 210, 90, 360, 'n', 'Herbal tea is not technically a true tea, as it does not derive from the Camellia sinensis plant (i.e. the plant that is used to create black, oolong, green, and white teas). Instead, herbal tea is an infusion or blend of various leaves, fruits, bark, roots, or flowers belonging to almost any edible, non-tea plant.')
;

INSERT INTO "teas"
    ("name", "temp_F", "min_time", "max_time", "bitters", "description")
VALUES
    ('Oolong Tea', 185, 120, 180, 'y', 'Oolong tea is a type of tea that is sometimes called "wulong" (also pronounced "oolong") or "black dragon" tea. Oolong teas are semi-oxidized teas. ... After the tea leaves are picked, they are rolled and allowed to oxidize. Oxidation produces floral notes that characterize many oolongs.')
;
