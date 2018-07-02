exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Terminal', calories: '299'},
        {id: 2, name: 'CMD', calories: '123'},
        {id: 3, name: 'Unix', calories: '22'},
        {id: 4, name: 'Linux', calories: '1'}
      ]);
    });
};
