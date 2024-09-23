exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id").primary();
    table.text("name").notNullable();

    //precisa ter uma nota para criar a tag, e caso uma nota seja deletada a tag também será.
    //dessa maneira caso uma nota seja deletada nenhuma tag ficará perdida no banco
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    //Não da para criar uma tag sem ter um usuário ou nota
    table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("tags");