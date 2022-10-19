module.exports = (req, res, next) => {
    console.log(`O IP ${req.ip} acessou via rota: ${req.originalUrl}`);
    next();
};