exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {id: 1, name: 'Breakfast'},
        {id: 2, name: 'Snacks'},
        {id: 3, name: 'Lunch'},
        {id: 4, name: 'Dinner'}
      ]);
    });
};
