const { verifySignUp } = require("../middlewares/verifySignUp");
const controller = require("../controllers/auth.controller");
const controllerParc = require("../controllers/parc.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //route login
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  //route parc 
  app.post("/api/parc", controllerParc.createParc);

  app.get("/api/parc/:id", controllerParc.myparcs);
};
