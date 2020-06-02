import Knex from 'knex'

export async function up(knex: Knex) {
  //CRIAR A TABELA
  //UM FOI
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable()
    table.string('name').notNullable()
    table.string('whatsapp').notNullable()
    table.string('email').notNullable()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2/*só tem 2 campos*/).notNullable()
  })//Criar a tabela no javascript
}
export async function down(knex: Knex) {
  //VOLTAR ATRAS (DELETAR A TABELA)
  //FAZ O CONTRÁRIO DO QUE O UP FAZ
  //OUTRO VOLTOU
  return knex.schema.dropTable('point')
}