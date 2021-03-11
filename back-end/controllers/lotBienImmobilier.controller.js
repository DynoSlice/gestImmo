const db = require("../models");
const LotBienImmobilier = db.lotBienImmobilier;

exports.create = (req, res) => {
  const lotBienImmobilier = new LotBienImmobilier({
    nom: req.body.nom,
    adresse: req.body.adresse,
    anneConstruction: req.body.anneConstruction,
    parc: req.body.parc
  });

  lotBienImmobilier.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Le lot a bien été créer !"+lotBienImmobilier });
  });
};

exports.myLot = function (req, res) {
    LotBienImmobilier.find({
        parc: req.query.parc
      }, function (err, lot) {
    if (err)
      res.send(err);
    res.json({
      message: 'Parc chargement des détails..',
      data: lot
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
    LotBienImmobilier.remove({
    _id: req.query.id
  }, function (err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'lot supprimer'
    });
  });
};

exports.update = function (req, res) {
    LotBienImmobilier.findById(req.query.id, function (err, lot) {
    if (err)
      res.send(err);
      console.log("id =="+req.query.id);
      console.log("parc =="+lot.nomParc);
      lot.nom = req.query.nom ? req.query.nom : lot.nom;
      lot.adresse = req.query.adresse ? req.query.adresse : lot.adresse;
      lot.anneConstruction = req.query.anneConstruction ? req.query.anneConstruction : lot.anneConstruction;
      lot.bienImmobilier = req.query.bienImmobilier ? req.query.bienImmobilier : lot.bienImmobilier;
      lot.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Parc infos mises à jour',
        data: lot
      });
    });
  });
};


