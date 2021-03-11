const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    Parc :{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Parc'
    }
  })
);

module.exports = User;