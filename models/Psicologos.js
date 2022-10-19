const db = require('../database/index');
const {DataTypes} = require('sequelize');

const Psicologos = db.define(
        "Psicologos",
        {
        idpsicologo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        apresentacao: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "psicologos",
    }

);

module.exports = Psicologos;