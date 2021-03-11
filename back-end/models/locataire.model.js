const mongoose = require("mongoose");

const Locataire = mongoose.model(
  "locataire",
  new mongoose.Schema({
    prenom: String,
    nom: String,
    numerosTelephone: String,
    email: String,
    revenueActuels: Number,
    document: String,
    bienImmobilier: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bienImmobilier"
      }
    ]
  })
);

module.exports = Locataire;