require("express-async-errors");
require("dotenv/config")

const migrationsRun = require("./database/sqlite/migrations");
const database = require("./database/sqlite")
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);

database();

const PORT = process.env.PORT || 3333;
app.use((error, request, response, next) => {
  // Se erro for do tipo AppError -> Lado do clientes
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",  
      message: error.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));