const db = require("../models");
const User = db.user;

//Check si les champs existe deja
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Erreur ! Email existe déjà !" });
      return;
    }

    next();
  });
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = {verifySignUp}