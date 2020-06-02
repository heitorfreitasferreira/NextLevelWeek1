import Knex from 'knex'

export async function up(knex: Knex) {
  //CRIAR A TABELA
  //UM FOI
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table.integer('poit_id').notNullable().references('id').inTable('points')
    table.integer('item_id').notNullable().references('id').inTable('items')
  })//Criar a tabela no javascript
}
export async function down(knex: Knex) {
  //VOLTAR ATRAS (DELETAR A TABELA)
  //FAZ O CONTRÁRIO DO QUE O UP FAZ
  //OUTRO VOLTOU
  return knex.schema.dropTable('point_items')
}