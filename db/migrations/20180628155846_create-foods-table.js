
exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE foods (id SERIAL PRIMARY KEY NOT NULL,
                                           name VARCHAR (255) NOT NULL,
                                           calories INT NOT NULL)`; 

    return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE foods`;

    return knex.raw(dropQuery);
};
