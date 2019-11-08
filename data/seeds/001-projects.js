
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Practice React', description: 'Over the weekend build out a small react application for practice.'},
        {id: 2, name: 'Practice Node', description: 'Read over all notes and catch up on areas there is still confusion on'},
        {id: 3, name: 'Relax', description: 'Watch Netflix all day long'}
      ]);
    });
};
