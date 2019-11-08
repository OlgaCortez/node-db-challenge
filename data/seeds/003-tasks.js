
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'Once you pick out a simple project, build out project to have a refresher on react.js', notes: 'Should be a project that is no more than 2 hours.'},
        {id: 2, project_id: 2, description: 'Go over all notes and video in Lambda TK library to go over Node.js', notes: 'Make sure to take 10 minute break every hour.'},
        {id: 3, project_id: 3, description: 'Once you have studied relax while watching netflix.', notes: 'Snacks are optional!'}
      ]);
    });
};
