const {Psicologos, Atendimento, Pacientes} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../middlewares/secret');

const dashboardController = {
    async numeroPacientes (req, res){
        const {count, rows} = await Pacientes.findAndCountAll();

        return res.status(201).json(count);
    },

    async numeroAtendimentos (req, res){
        const {count, rows} = await Atendimento.findAndCountAll();

        return res.status(201).json(count);
    },
    async numeroPsicologos (req, res){
        const {count, rows} = await Psicologos.findAndCountAll();

        return res.status(201).json(count);
    },
    async mediaPorPsicologo (req, res){
        const {count: quantAtendimentos, rows: atendimentos} = await Atendimento.findAndCountAll();

        const {count: quantPsicologos, rows: psicologos} = await Psicologos.findAndCountAll();

        res.status(201).json(quantAtendimentos/quantPsicologos);
    },
}

module.exports = dashboardController;
