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

exports.myparcs = function (req, res) {
  Parc.findById(req.query.id, function (err, parc) {
    if (err)
      res.send(err);
    res.json({
      message: 'Parc chargement des détails..',
      data: parc
    });
  }).populate("user").populate("lotBienImmobilier");
};

// Handle delete contact
exports.delete = function (req, res) {
  Parc.remove({
    _id: req.query.id
  }, function (err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Parc supprimé'
    });
  });
};

exports.update = function (req, res) {
  Parc.findById(req.query.id, function (err, parc) {
    if (err)
      res.send(err);
      console.log("id =="+req.query.id);
      console.log("parc =="+parc.nomParc);
      parc.nomParc = req.query.nomParc ? req.query.nomParc : parc.nomParc;
      parc.lotBienImmobilier = req.query.lotBienImmobilier ? req.query.lotBienImmobilier : parc.lotBienImmobilier;
    parc.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Parc infos mises à jour',
        data: parc
      });
    });
  });
};


