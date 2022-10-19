const {Psicologos} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../middlewares/secret');

const authController = {
    async login(req, res){
        const { email, senha } = req.body;

        const user = await Psicologos.findOne({
            where:{
                email,
            }
        })
        
        if(!user){
            res.status(401).json("E-mail ou senha inválido, verifique e tente novamente")
        }
        else if(!bcrypt.compareSync(senha, user.senha)){
            res.status(401).json("E-mail ou senha inválido, verifique e tente novamente")
        }
        else{
            const token = jwt.sign(
            {
                idpsicologo: user.idpsicologo,
                nome: user.nome,
                email: user.email
            },
                secret.key
            );
            console.log(user.idpsicologo, user.nome, token); 
            return res.status(200).json(token)
            
        }
    }
}

module.exports = authController;
