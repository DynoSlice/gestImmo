const db = require("../models");
const Locataire = db.locataire;

exports.create = (req, res) => {
  const locataire = new Locataire({
    prenom: req.body.prenom,
    nom: req.body.nom,
    numerosTelephone: req.body.numerosTelephone,
    email: req.body.email,
    revenueActuels: req.body.revenueActuels,
    document: req.body.document
  });

  locataire.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Le locataire a bien été créer !", data: locataire });
  });
};

exports.myLot = function (req, res) {
    Locataire.findById(req.query.id, function (err, lot) {
    if (err)
      res.send(err);
    res.json({
      message: 'locataire chargement des détails..',
      data: lot
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
    Locataire.remove({
    _id: req.query.id
  }, function (err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'locataire supprimer'
    });
  });
};

exports.update = function (req, res) {
    Locataire.findById(req.query.id, function (err, locataire) {
    if (err)
      res.send(err);
      console.log("id =="+req.query.id);
      console.log("parc =="+locataire.nomParc);
      locataire.prenom = req.query.prenom ? req.query.prenom : locataire.prenom;
      locataire.nom = req.query.nom ? req.query.nom : locataire.nom;
      locataire.numerosTelephone = req.query.numerosTelephone ? req.query.numerosTelephone : locataire.numerosTelephone;
      locataire.email = req.query.email ? req.query.email : locataire.email;
      locataire.revenueActuels = req.query.revenueActuels ? req.query.revenueActuels : locataire.revenueActuels;
      locataire.document = req.query.document ? req.query.document : locataire.document;
      locataire.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Parc infos mises à jour',
        data: locataire
      });
    });
  });
};


