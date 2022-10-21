const {Psicologos, Atendimento, Pacientes} = require('../models/index');

const dashboardController = {
    async numeroPacientes (req, res){
        const {count } = await Pacientes.findAndCountAll();

        return res.status(201).json(count);
    },

    async numeroAtendimentos (req, res){
        const {count } = await Atendimento.findAndCountAll();

        return res.status(201).json(count);
    },
    async numeroPsicologos (req, res){
        const {count } = await Psicologos.findAndCountAll();

        return res.status(201).json(count);
    },
    async mediaPorPsicologo (req, res){
        const {count: quantAtendimentos} = await Atendimento.findAndCountAll();

        const {count: quantPsicologos} = await Psicologos.findAndCountAll();

        res.status(201).json(quantAtendimentos/quantPsicologos);
    },
}

module.exports = dashboardController;
