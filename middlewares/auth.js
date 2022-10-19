const secret = require('./secret');
const { expressjwt: jwt } = require("express-jwt"); 
module.exports = jwt(
    {
        secret: secret.key,
        algorithms: ["HS256"],
    }
);
    
