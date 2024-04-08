exports.up = function(knex) {
    return knex.schema.createTable('Tecnica_MO', (table) => {
        table.increments('id_tecnica_mo').primary();
        table.integer('aumento').nullable();
        table.date('data').nullable();
        table.string('comentario').nullable();
        table.string('resultado').nullable();
        table.string('tonalidade', 50).nullable();
        table.integer('tecnica_id').unsigned().references('id_tecnica').inTable('tecnica').onDelete('CASCADE').onUpdate('CASCADE');
    }).then(() => {
        console.log('Tabela Tecnica_MO criada com sucesso!');
    }).catch((error) => {
        console.error('Erro ao criar tabela Tecnica_MO:', error);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Tecnica_MO');
};