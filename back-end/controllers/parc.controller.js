const db = require("../models");
const Parc = db.parc;

exports.createParc = (req, res) => {
    const parc = new Parc({
        nomParc: req.body.nomParc,
        user: req.body.user
    });
  
    parc.save(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      res.send({ message: "Le parc a été enregistré avec succès !" });
    });
};

exports.myparcs = (req, res) => {
  Parc.find({
    parc_id: req.body.parc_id
  }).populate("user")
    .exec((err, parc) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!parc) {
        return res.status(404).send({ message: "Utilisateur non trouvé" });
      }

      res.status(200).send({
        pa: parc
      });
    });
};
