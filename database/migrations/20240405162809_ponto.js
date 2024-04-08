/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ponto', function(table) {
      table.increments('id_ponto').primary();
      table.string('nome_ponto', 100).notNullable();
      table.integer('posicao_x').notNullable();
      table.integer('posicao_y').notNullable();
      table.integer('projeto_id').unsigned().notNullable();
      table.foreign('projeto_id').references('id_projeto').inTable('projeto').onDelete('CASCADE').onUpdate('CASCADE');
    }).then(() => {
      console.log('Tabela de pontos criada com sucesso.');
    }).catch(error => {
      console.error('Erro ao criar tabela de pontos:', error);
    });
  };
  

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ponto');
  };