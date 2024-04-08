exports.up = function(knex) {
    return knex.schema.createTable('tecnica_xrf_diretorio', function(table) {
      table.increments('id_tecnica_xrf_diretorio').primary();
      table.string('diretorio_arquivo', 200);
      table.integer('tecnica_xrf_id').unsigned().references('id_tecnica_xrf').inTable('Tecnica_XRF').onDelete('CASCADE').onUpdate('CASCADE');
    });
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tecnica_xrf_diretorio');
  };