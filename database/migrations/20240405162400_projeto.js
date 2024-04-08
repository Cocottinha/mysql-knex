/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('projeto', function(table) {
        table.increments('id_projeto').primary();
        table.string('nome_imagem', 100).notNullable();
        table.string('extensao_imagem', 20).notNullable();
        table.string('diretorio_imagem', 100).notNullable();
        table.integer('largura_imagem').notNullable();
        table.integer('altura_imagem').notNullable();
      }).then(() => {
        console.log('Tabela de projetos criada com sucesso.');
      }).catch(error => {
        console.error('Erro ao criar tabela de projetos:', error);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projeto");
  };