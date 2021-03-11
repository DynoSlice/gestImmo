const db = require("../models");
const BienImmobilier = db.bienImmobilier;
const authorize = require("../middlewares/authJwt");

exports.create = (req, res) => {
  const bienImmobilier = new BienImmobilier({
    typeBien: req.body.typeBien,
    nombreDePiece: req.body.nombreDePiece,
    anneConstruction: req.body.anneConstruction,
    classeEnergetique: req.body.classeEnergetique,
    loyerMensuelHorsCharge: req.body.loyerMensuelHorsCharge,
    coutMensuelleCharge: req.body.coutMensuelleCharge,
    equipementDuBien: req.body.equipementDuBien,
    dernierTravauxEffectuer: req.body.dernierTravauxEffectuer,
    locataire: req.body.locataire,
    leBailLocatifenCours: req.body.leBailLocatifenCours,
    etatsdesLieux: req.body.etatsdesLieux,
    dateDedebutbailLocatif: req.body.dateDedebutbailLocatif,
    dateDefinbailLocatif: req.body.dateDefinbailLocatif,
    loyerVerser: req.body.loyerVerser

  });

  bienImmobilier.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Le lot a bien été créer !"+bienImmobilier });
  });
};

exports.myLot = function (req, res) {
    BienImmobilier.find({
        lotbienimmobilier: req.query.lotbienimmobilier
      }, function (err, bienimmo) {
    if (err)
      res.send(err);
    res.json({
      message: 'Parc chargement des détails..',
      data: bienimmo
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
    BienImmobilier.remove({
    _id: req.query.id
  }, function (err, bienimmo) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'bien supprimer'+bienimmo
    });
  });
};

exports.update = function (req, res) {
    BienImmobilier.findById(req.query.id, function (err, lot) {
    if (err)
      res.send(err);
      console.log("id =="+req.query.id);
      console.log("parc =="+lot.nom);
      lot.typeBien = req.query.typeBien ? req.query.typeBien : lot.typeBien;
      lot.nombreDePiece = req.query.nombreDePiece ? req.query.nombreDePiece : lot.nombreDePiece;
      lot.anneConstruction = req.query.anneConstruction ? req.query.anneConstruction : lot.anneConstruction;
      lot.classeEnergetique = req.query.classeEnergetique ? req.query.classeEnergetique : lot.classeEnergetique;
      lot.loyerMensuelHorsCharge = req.query.loyerMensuelHorsCharge ? req.query.loyerMensuelHorsCharge : lot.loyerMensuelHorsCharge;
      lot.coutMensuelleCharge = req.query.coutMensuelleCharge ? req.query.coutMensuelleCharge : lot.coutMensuelleCharge;
      lot.equipementDuBien = req.query.equipementDuBien ? req.query.equipementDuBien : lot.equipementDuBien;
      lot.dernierTravauxEffectuer = req.query.dernierTravauxEffectuer ? req.query.dernierTravauxEffectuer : lot.dernierTravauxEffectuer;
      lot.locataire = req.query.locataire ? req.query.locataire : lot.locataire;
      lot.leBailLocatifenCours = req.query.leBailLocatifenCours ? req.query.leBailLocatifenCours : lot.leBailLocatifenCours;
      lot.etatsdesLieux = req.query.etatsdesLieux ? req.query.etatsdesLieux : lot.etatsdesLieux;
      lot.dateDedebutbailLocatif = req.query.dateDedebutbailLocatif ? req.query.dateDedebutbailLocatif : lot.dateDedebutbailLocatif;
      lot.dateDefinbailLocatif = req.query.dateDefinbailLocatif ? req.query.dateDefinbailLocatif : lot.dateDefinbailLocatif;
      lot.loyerVerser = req.query.loyerVerser ? req.query.loyerVerser : lot.loyerVerser;
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


