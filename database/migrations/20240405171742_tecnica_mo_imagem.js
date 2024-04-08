exports.up = function(knex) {
    return knex.schema.createTable('Tecnica_MO_Imagem', (table) => {
        table.increments('id_tecnica_mo_imagem').primary();
        table.string('objetiva', 10);
        table.string('diretorio', 200);
        table.integer('tecnica_mo_id').unsigned().references('id_tecnica_mo').inTable('Tecnica_MO').onDelete('CASCADE').onUpdate('CASCADE');

    }).then(() => {
        console.log('Tabela Tecnica_MO_Imagem criada com sucesso!');
    }).catch((error) => {
        console.error('Erro ao criar tabela Tecnica_MO_Imagem:', error);
    });
}

  
exports.down = function(knex) {
    return knex.schema.dropTable('Tecnica_MO_Imagem');
};