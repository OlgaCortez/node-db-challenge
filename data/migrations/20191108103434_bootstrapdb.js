
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 500);
      tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 500).notNullable();
      tbl.string('description', 500);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
 
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');

        tbl.string('description', 500).notNullable();
        tbl.string('notes', 500);
        tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources-projects', tbl => {
      tbl.increments();
      
      tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT') 
      .onUpdate('CASCADE');

      tbl
      .integer('resource_id')
      .unsigned()
      .references('id')
      .inTable('resources')
      .onDelete('RESTRICT') 
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources-projects')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
    
};
