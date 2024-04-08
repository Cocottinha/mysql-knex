exports.up = function(knex) {
    return knex.schema.createTable('Arquivo', (table) => {
        table.increments('id_arquivo').primary();
        table.string('diretorio_servidor', 200);
        table.string('nome_do_arquivo', 100);
        table.date('data_upload').nullable();
        table.boolean('upload_feito').nullable().default('false');
        table.integer('projeto_id').unsigned().references('id_projeto').inTable('projeto');       
    }).then(() => {
        console.log('Tabela de arquivos criada com sucesso.');
    }).catch(error => {
        console.error('Erro ao criar tabela de arquivos:', error);
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('Arquivo');
};
