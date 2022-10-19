const {Sequelize} = require('sequelize');

const DB_NAME = 'la_vie_saude_mental'
const DB_USER = 'root';
const DB_PASS = 'Reisferreira312!'
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
}

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (err) {
    console.error("Erro ao carregar o banco de dados", err);
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Autenticado com sucesso!");
    } catch (err) {
        console.log("Erro na autenticação...", err);
    }
};

Object.assign(db, {
    hasConnection,
})
module.exports = db;