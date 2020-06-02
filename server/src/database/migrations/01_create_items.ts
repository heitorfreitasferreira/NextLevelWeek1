import Knex from 'knex'

export async function up(knex: Knex) {
  //CRIAR A TABELA
  //UM FOI
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable()
    table.string('title').notNullable()
  })//Criar a tabela no javascript
}
export async function down(knex: Knex) {
  //VOLTAR ATRAS (DELETAR A TABELA)
  //FAZ O CONTRÁRIO DO QUE O UP FAZ
  //OUTRO VOLTOU
  return knex.schema.dropTable('items')
}