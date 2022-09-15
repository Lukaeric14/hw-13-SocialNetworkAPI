const router = require("express").Router();
const userRoutes = require("./api/user");
const thoughtRoutes = require("./api/thought");

router.get("/", (req, res) => {
  res.send("Server is up");
});

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;
