exports.up = function(knex) {
    return knex.schema.createTable('ftir_diretorio', function(table) {
      table.increments('id_tecnica_ftir_diretorio').primary();
      table.string('diretorio_arquivo', 200);
      table.integer('tecnica_ftir_id').unsigned().references('id_tecnica_FTIR').inTable('Tecnica_FTIR').onDelete('CASCADE').onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ftir_diretorio');
  };