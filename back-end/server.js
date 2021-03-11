//Express sert à créer les API Rest
//body-parser aide à analyser la demande et à créer l' req.bodyobjet
//cors fournit un middleware Express pour activer CORS
const express = require("express");
const cors = require("cors");
const app = express();

// parse requests of content-type - application/json

//auth
// require('./routes/auth.routes')(app);
let apiRoutes = require("./routes/auth.routes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

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

app.use('/api', apiRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}.`);
});