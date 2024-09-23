const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const user_id = request.user.id;

    // Retornando a Tag e agrupando por nome, caso exista valores iguais
    const tags = await knex("tags")
      .where({ user_id })
      .groupBy("name")

    return response.json(tags);
  }

};

module.exports = TagsController;