// Reunindo todos os grupos de rotas

const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();
routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRouter);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;

