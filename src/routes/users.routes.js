const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UservatarController");

const userController = new UsersController();
const userAvatarController = new UserAvatarController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);

// rota para atualizando um campo específico
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;