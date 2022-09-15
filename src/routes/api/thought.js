const router = require("express").Router();
const thoughtController = require("../../controllers/thought");

router
  .route("/")
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);

module.exports = router;
