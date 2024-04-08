exports.up = function(knex) {
    return knex.schema.createTable('Tecnica_FTIR', function(table) {
      table.increments('id_tecnica_FTIR').primary();
      table.string('tempo', 100);
      table.string('intervalo', 100);
      table.string('resolucao', 100);
      table.dateTime('data');
      table.string('comentario');
      table.string('resultado');
      table.string('tonalidade', 50);
      table.string('nome_tecnica', 20).notNullable();
      // Chave estrangeira para a tabela Tecnica
      table.integer('tecnica_id').unsigned().references('id_tecnica').inTable('tecnica').onDelete('CASCADE').onUpdate('CASCADE');
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('Tecnica_FTIR');
};