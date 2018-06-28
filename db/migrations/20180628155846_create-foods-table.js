
exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE foods (id SERIAL PRIMARY KEY NOT NULL,
                                           name VARCHAR (255),
                                           calories INT)`; 

    return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE foods`;

    return knex.raw(dropQuery);
};
