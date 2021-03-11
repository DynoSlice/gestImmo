const mongoose = require("mongoose");

const lotBienImmobilier = mongoose.model(
  "lotBienImmobilier",
  new mongoose.Schema({
    nom: String,
    adresse: String,
    anneConstruction : Number,
    parc: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parc"
      }
    ,
    bienImmobilier: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "bienImmobilier"
        }
    ]
  })
);

module.exports = lotBienImmobilier;