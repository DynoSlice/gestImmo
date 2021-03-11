const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  console.log("le token =="+token);
  if (!token) {
    return res.status(403).send({ message: "Aucun jeton fourni !" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Non autorisé!" });
    }
    req.userId = decoded.id;
    next();
  });
};


const authJwt = {
  verifyToken
};
module.exports = {authJwt};