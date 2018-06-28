
exports.up = function(knex, Promise) {
    createQuery = `CREATE TABLE food_meals (
                   id SERIAL PRIMARY KEY NOT NULL,
                   meal_id INT REFERENCES meals(id),
                   food_id INT REFERENCES foods(id))`; 

    return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
    dropQuery = `DROP TABLE food_meals`;

    return knex.raw(dropQuery);
};
