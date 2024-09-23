exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id").primary();
    table.text("url").notNullable();

    //precisa ter uma nota para criar um link
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("links");