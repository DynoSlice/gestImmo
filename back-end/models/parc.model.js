const mongoose = require("mongoose");

const Parc = mongoose.model(
  "Parc",
  new mongoose.Schema({
    nomParc: String,
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
  })
);

module.exports = Parc;