/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tecnica', function(table) {
      table.increments('id_tecnica').primary();
      table.integer('ponto_id').unsigned().notNullable();
      table.foreign('ponto_id').references('id_ponto').inTable('ponto').onDelete('CASCADE').onUpdate('CASCADE');
    }).then(() => {
      console.log('Tabela de técnica criada com sucesso.');
    }).catch(error => {
      console.error('Erro ao criar tabela de técnica:', error);
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tecnica');
  };