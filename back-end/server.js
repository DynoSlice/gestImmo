//Express sert à créer les API Rest
//body-parser aide à analyser la demande et à créer l' req.bodyobjet
//cors fournit un middleware Express pour activer CORS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//auth
require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);


const db = require("./models");
const dbConfig = require ("./config/db.config");
//connexion a mongodb
db.mongoose
  .connect(dbConfig.HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connexion réussie à MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Erreur de connexion", err);
    process.exit();
  });


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'application GEST’IMMO." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}.`);
});