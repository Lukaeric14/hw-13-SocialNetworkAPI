const router = require("express").Router();
const thoughtController = require("../../controllers/thought");

router
  .route("/")
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);

router
  .route("/:id")
  .get(thoughtController.getThoughtById)
  .put(thoughtController.updateThought)
  .delete(thoughtController.deleteThought);

router.route("/:thoughtId/reactions").post(thoughtController.addReaction);

module.exports = router;
