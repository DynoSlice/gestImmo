const mongoose = require("mongoose");

const BienImmobilier = mongoose.model(
  "bienImmobilier",
  new mongoose.Schema({
    typeBien: String,
    nombreDePiece: Number,
    anneConstruction : String,
    classeEnergetique : String,
    loyerMensuelHorsCharge: Number,
    coutMensuelleCharge : Number,
    equipementDuBien : String,
    dernierTravauxEffectuer : String,
    locataire: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "locataire"
        }
    ],
    leBailLocatifenCours: String,
    etatsdesLieux: String,
    dateDedebutbailLocatif: Date,
    dateDefinbailLocatif: Date,
    loyerVerser: String,
    lotBienImmobilier: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "lotBienImmobilier"
    }
      
  })
);

module.exports = BienImmobilier;
