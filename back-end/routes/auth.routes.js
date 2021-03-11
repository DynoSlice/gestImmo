const { verifySignUp } = require("../middlewares/verifySignUp");
const { authJwt } = require("../middlewares/authJwt");
const controller = require("../controllers/auth.controller");
const controllerParc = require("../controllers/parc.controller");
const controllerLotImmobilier = require("../controllers/lotBienImmobilier.controller");
const controllerBienImmobilier = require("../controllers/BienImmobilier.controller");
const controllerLocataire = require("../controllers/locataire.controller");
let router = require('express').Router();
const  ProtectedRoutes = require('express').Router(); 
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

ProtectedRoutes.use((req, res, next) =>{
    let token = req.headers["x-access-token"];
  console.log("le token =="+token);
  if (!token) {
    return res.status(403).send({ message: "Aucun jeton fourni !" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Non autorisé!" });
    }
    req.userId = decoded.id;
    console.log("userId === "+req.userId);
    next();
  });
});


//--------------------------------------------routeur de login et inscriptions --------------
router.route("/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail]).post(controller.signup)
router.route('/auth/signin').post(controller.signin)

//-------------------------------------------Parc crud----------------------------------------
router.route("/parccreate").get(ProtectedRoutes,controllerParc.myparcs).post(ProtectedRoutes,controllerParc.createParc).delete(ProtectedRoutes,controllerParc.delete).put(ProtectedRoutes,controllerParc.update);

//-----------------------------------------Lot Immobilier Crud---------------------------------
router.route('/lotImmo').get(ProtectedRoutes,controllerLotImmobilier.myLot).post(ProtectedRoutes,controllerLotImmobilier.create).delete(ProtectedRoutes,controllerLotImmobilier.delete).put(ProtectedRoutes,controllerLotImmobilier.update);

//-----------------------------------------Lot BienImmobilier---------------------------------------
router.route('/bienImmo').get(ProtectedRoutes,controllerBienImmobilier.myLot).post(ProtectedRoutes,controllerBienImmobilier.create).delete(ProtectedRoutes,controllerBienImmobilier.delete).put(ProtectedRoutes,controllerBienImmobilier.update);

//--------------------------------------Route du locataire-------------------------------------
router.route('/locataire').get(ProtectedRoutes,controllerLocataire.myLot).post(ProtectedRoutes,controllerLocataire.create).delete(ProtectedRoutes,controllerLocataire.delete).put(ProtectedRoutes,controllerLocataire.update);


module.exports = router;
