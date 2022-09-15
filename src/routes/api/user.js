const router = require("express").Router();
const userController = require("../../controllers/user");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getByUserId)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route("/:id/friends/:friendId")
  .post(userController.addFriend)
  .delete(userController.deleteFriend);

module.exports = router;
