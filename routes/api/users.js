const router = require("express").Router();
const userController = require("../../controllers/userController");

// route to sign up new user
router.route("/register")
  .post(userController.create);

//   // route to sign up new user
router.route("/")
.post(userController.findById);


// Matches with "/api/user/:id"
router.route("/signin")
.post(userController.findAll)
//   .get(userController.findById)
  .put(userController.update);

module.exports = router;
