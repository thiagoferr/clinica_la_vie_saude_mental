const Atendimento = require('./Atendimento');
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');

Pacientes.hasMany(Atendimento,{
    constraint: true,
    foreignKey: 'id_paciente',
    as: 'atendimentos'
});

Atendimento.belongsTo(Pacientes,{
    constraint: true,
    foreignKey: 'id_paciente',
    as: 'pacientes'
});

Atendimento.belongsTo(Psicologos,{
    constraint: true,
    foreignKey: 'id_psicologo',
    as: 'psicologos'
});

Psicologos.hasMany(Atendimento,{
    constraint: true,
    foreignKey: 'id_psicologo',
    as: 'atendimentos'
});

module.exports = {
    Atendimento,
    Pacientes,
    Psicologos
};