const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.parc = require("./parc.model");
db.lotBienImmobilier = require("./lotBienImmobilier.model");
db.bienImmobilier = require("./bienImmobilier.model");
db.locataire = require("./locataire.model");


module.exports = db;