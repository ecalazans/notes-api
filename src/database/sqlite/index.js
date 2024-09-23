const sqlite3 = require("sqlite3"); // responsável por estabelecer a conexão com a base de dados
const sqlite = require("sqlite"); // responsável por conectar

const path = require("path");

// função async que cria o bd e a conexão
async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database  
    });

    return database;
};

module.exports = sqliteConnection;