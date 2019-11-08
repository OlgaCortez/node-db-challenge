
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Youtube', description: 'Youtube has great videos for building small react projects.'},
        {id: 2, name: 'Lambda TK', description: 'Lambda has an extensive library of material to go over node.js.'},
        {id: 3, name: 'Netlix', description: 'Turn on TV and stream your favorite shows on Netflix.'}
      ]);
    });
};
