exports.up = function(knex) {
    return knex.schema.createTable('Tecnica_XRF', (table) => {
    table.increments('id_tecnica_xrf').primary();
    table.integer('tempo').nullable();
    table.integer('voltagem').nullable();
    table.integer('corrente').nullable();
    table.integer('calibracao').nullable();
    table.integer('colimador').nullable();
    table.date('data').nullable();
    table.string('comentario').nullable();
    table.string('resultado').nullable();
    table.string('tonalidade', 50).nullable();
    table.integer('tecnica_id').unsigned().references('id_tecnica').inTable('tecnica').onDelete('CASCADE').onUpdate('CASCADE');
    }).then(() => {
        console.log('Tabela Tecnica_XRF criada com sucesso!');
    }).catch((error) => {
        console.error('Erro ao criar tabela Tecnica_XRF:', error);
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('Tecnica_XRF');
  };