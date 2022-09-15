const router = require("express").Router();
const thoughtController = require("../../controllers/thought");

router
  .route("/")
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);

router
  .route("/:id")
  .get(thoughtController.getThoughtById)
  .put(thoughtController.updateThought);

module.exports = router;
